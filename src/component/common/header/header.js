/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useLayoutEffect } from "react";
import Bookmark from "./bookmark";
import man from "../../../assets/images/dashboard/user.png";
import { AlignCenter, FileText, Activity, User, Clipboard, Anchor, Settings, LogOut, ThumbsUp, MessageCircle, MessageSquare, Maximize, Search, MoreHorizontal } from "react-feather";
import { Row, Col, Form, FormGroup, Button } from "reactstrap";
import { MENUITEMS } from "../sidebar/menu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logoDark from "../../../assets/images/logo/logo.png";
import logoLight from "../../../assets/images/logo/light-logo.png";

const Header = (props) => {
  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("");
  const [mainmenu, setMainMenu] = useState(MENUITEMS);
  const [searchValue, setsearchValue] = useState("");
  const [navmenu, setNavmenu] = useState(false);
  const [searchinput, setSearchinput] = useState(false);
  const [spinner, setspinner] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const [sidebar, setSidebar] = useState("iconsidebar-menu");
  const [rightSidebar, setRightSidebar] = useState(true);
  const width = useWindowSize();
  const layoutVersion = useSelector((state) => state.customizerSlice.color.layout_version);
  const mixLayout = useSelector((state) => state.customizerSlice.mix_layout)
  const isDarkMode = layoutVersion === "dark-only" || mixLayout === "dark-only";
  const logo = isDarkMode ? logoLight : logoDark;

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      setsearchValue("");
    }
  }, []);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    if (width <= 991) {
      setSidebar("iconbar-second-close");
      document.querySelector(".iconsidebar-menu").classList.add("iconbar-second-close");
    } else {
      setSidebar("iconsidebar-menu");
      document.querySelector(".iconsidebar-menu").classList.remove("iconbar-second-close");
    }

    setProfile(localStorage.getItem("profileURL") || man);
    setName(localStorage.getItem("Name"));
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction, width]);

  const logOuts = () => {
    localStorage.removeItem("profileURL");
    history(`${process.env.PUBLIC_URL}/login`);
  };

  const handleSearchKeyword = (keyword) => {
    keyword ? addFix() : removeFix();
    const items = [];
    if (keyword.length > 0) {
      setsearchValue(keyword);
      setspinner(true);
      setTimeout(function () {
        setspinner(false);
      }, 1000);
    } else {
      setspinner(false);
    }
    mainmenu.filter((menuItems) => {
      if (menuItems.title.toLowerCase().includes(keyword) && menuItems.type === "link") {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter((subItems) => {
        if (subItems.title.toLowerCase().includes(keyword) && subItems.type === "link") {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter((suSubItems) => {
          if (suSubItems.title.toLowerCase().includes(keyword)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
          return suSubItems;
        });
        return subItems;
      });
      checkSearchResultEmpty(items);
      setsearchValue(items);
      return menuItems;
    });
  };

  const addFix = () => {
    setSearchResult(true);
    document.querySelector(".Typeahead-menu").classList.add("is-open");
    document.body.classList.add("offcanvas");
  };

  const removeFix = () => {
    setSearchResult(false);
    setsearchValue("");
    document.querySelector(".Typeahead-menu").classList.remove("is-open");
    document.body.classList.remove("offcanvas");
  };

  const checkSearchResultEmpty = (items) => {
    if (!items.length) {
      setSearchResultEmpty(true);
      document.querySelector(".empty-menu").classList.add("is-open");
    } else {
      setSearchResultEmpty(false);
      document.querySelector(".empty-menu").classList.remove("is-open");
    }
  };
  const openCloseSidebar = (sidebartoggle) => {
    var isOpen = false;

    const mainMenuUl = [...document.querySelector(".iconMenu-bar").children];

    mainMenuUl.map((item) => {
      if (item.classList.value.includes("open")) {
        isOpen = true;
      }
      return item;
    });

    if (sidebartoggle === "iconsidebar-menu") {
      setSidebar("iconbar-second-close");
      document.querySelector(".iconsidebar-menu").classList.remove("iconbar-mainmenu-close");
      document.querySelector(".iconsidebar-menu").classList.add("iconbar-second-close");
    } else if (isOpen && sidebartoggle === "iconbar-second-close") {
      setSidebar("iconsidebar-menu");
      document.querySelector(".iconsidebar-menu").classList.remove("iconbar-second-close");
    } else if (!isOpen && sidebartoggle === "iconbar-second-close") {
      setSidebar("iconsidebar-menu");
      document.querySelector(".iconsidebar-menu").classList.add("iconbar-mainmenu-close");
      document.querySelector(".iconsidebar-menu").classList.remove("iconbar-second-close");
    }
  };

  const showRightSidebar = () => {
    if (rightSidebar) {
      setRightSidebar(!rightSidebar);
      document.querySelector(".right-sidebar").classList.add("show");
    } else {
      setRightSidebar(!rightSidebar);
      document.querySelector(".right-sidebar").classList.remove("show");
    }
  };

  //full screen function
  const goFull = () => {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

  const Navmenuhideandshow = () => {
    if (navmenu) {
      setNavmenu(!navmenu);
      document.querySelector(".nav-menus").classList.add("open");
    } else {
      setNavmenu(!navmenu);
      document.querySelector(".nav-menus").classList.remove("open");
    }
  };

  const openCloseSearch = () => {
    if (searchinput) {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.add("open");
    } else {
      setSearchinput(!searchinput);
      document.querySelector(".Typeahead-input").classList.remove("open");
      document.querySelector(".Typeahead-menu").classList.remove("is-open");
    }
  };

  return (
    <div className='page-main-header'>
      <div className='main-header-right'>
        <div className='main-header-left text-center'>
          <div className='logo-wrapper'>
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
        </div>
        <div className='mobile-sidebar'>
          <div className='media-body text-end switch-sm'>
            <label className='switch ms-3'>
              <AlignCenter className='font-primary' onClick={() => openCloseSidebar(sidebar)} />
            </label>
          </div>
        </div>
        <div className='nav-right col pull-right right-menu'>
          <ul className='nav-menus'>
            <li>
              <Form className='form-inline search-form' action='#javascript' method='get'>
                <div className='form-group'>
                  <div className='Typeahead Typeahead--twitterUsers'>
                    <div className='u-posRelative'>
                      <input className='Typeahead-input form-control-plaintext' id='demo-input' type='text' placeholder='Search Your Page...' defaultValue={searchValue} onChange={(e) => handleSearchKeyword(e.target.value)} />
                      <div className={`spinner-border Typeahead-spinner ${spinner === true ? "show" : ""}`} role='status'>
                        <span className='sr-only'>Loading...</span>
                      </div>
                      <span className='d-sm-none mobile-search' onClick={openCloseSearch}>
                        <Search />
                      </span>
                    </div>
                    <div className='Typeahead-menu custom-scrollbar' id='search-outer'>
                      {searchValue
                        ? searchValue.map((data, index) => {
                            if (document.querySelector(".Typeahead-input").classList.contains("open")) {
                              document.querySelector(".Typeahead-menu").classList.add("is-open");
                            }
                            return (
                              <div className='ProfileCard u-cf' key={index}>
                                <div className='ProfileCard-avatar'>{data.icon}</div>
                                <div className='ProfileCard-details'>
                                  <div className='ProfileCard-realName'>
                                    <Link
                                      to={data.path}
                                      className='realname'
                                      onClick={() => {
                                        openCloseSearch();
                                        removeFix();
                                      }}
                                    >
                                      {data.title}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                    <div className='Typeahead-menu empty-menu'>
                      <div className='tt-dataset tt-dataset-0'>
                        <div className='EmptyMessage'>Opps!! There are no result found.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
            </li>
            <li>
              <a className='text-dark' href='#javascript!' onClick={goFull}>
                <Maximize />
              </a>
            </li>

            <Bookmark />

            <li className='onhover-dropdown'>
              <img className='img-fluid img-shadow-secondary' src={require("../../../assets/images/dashboard/like.png")} alt='' />
              <ul className='onhover-show-div droplet-dropdown'>
                <li className='gradient-primary text-center'>
                  <h5 className='f-w-700'>Grid Dashboard</h5>
                  <span>Easy Grid inside dropdown</span>
                </li>
                <li>
                  <Row>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/others/knowledgebase`}>
                        <FileText />
                        <span className='d-block'>Content</span>
                      </Link>
                    </Col>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/appnew/todo-app`}>
                        <Activity />
                        <span className='d-block'>Activity</span>
                      </Link>
                    </Col>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/appnew/contact-app`}>
                        <User />
                        <span className='d-block'>Contacts</span>
                      </Link>
                    </Col>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/appnew/email-app`}>
                        <Clipboard />
                        <span className='d-block'>Reports</span>
                      </Link>
                    </Col>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/learning/learning-list`}>
                        <Anchor />
                        <span className='d-block'>Automation</span>
                      </Link>
                    </Col>
                    <Col sm='4 col-6' className='droplet-main'>
                      <Link to={`${process.env.PUBLIC_URL}/pages/maintenance`}>
                        <Settings />
                        <span className='d-block'>Settings</span>
                      </Link>
                    </Col>
                  </Row>
                </li>
                <li className='text-center'>
                  <Button color='primary' className='btn-air-primary'>
                    Follows Up
                  </Button>
                </li>
              </ul>
            </li>
            <li className='onhover-dropdown'>
              <img className='img-fluid img-shadow-warning' src={require("../../../assets/images/dashboard/notification.png")} alt='' />
              <ul className='onhover-show-div notification-dropdown'>
                <li className='gradient-primary'>
                  <h5 className='f-w-700'>Notifications</h5>
                  <span>You have 6 unread messages</span>
                </li>
                <li>
                  <div className='media'>
                    <div className='notification-icons bg-success me-3'>
                      <ThumbsUp className='mt-0' />
                    </div>
                    <div className='media-body'>
                      <h6>Someone Likes Your Posts</h6>
                      <p className='mb-0'> 2 Hours Ago</p>
                    </div>
                  </div>
                </li>
                <li className='pt-0'>
                  <div className='media'>
                    <div className='notification-icons bg-info me-3'>
                      <MessageCircle className='mt-0' />
                    </div>
                    <div className='media-body'>
                      <h6>3 New Comments</h6>
                      <p className='mb-0'> 1 Hours Ago</p>
                    </div>
                  </div>
                </li>
                <li className='bg-light txt-dark'>
                  <a href='#javascript'>All </a> notification
                </li>
              </ul>
            </li>
            <li>
              <a className='right_side_toggle' href='#javascript' onClick={() => showRightSidebar()}>
                <img className='img-fluid img-shadow-success' src={require("../../../assets/images/dashboard/chat.png")} alt='' />
              </a>
            </li>
            <li className='onhover-dropdown'>
              {" "}
              <span className='media user-header'>
                <img className={profile === man ? "img-fluid" : "otheruser"} src={profile} alt='' />
              </span>
              <ul className='onhover-show-div profile-dropdown'>
                <li className='gradient-primary'>
                  <h5 className='f-w-600 mb-0'>Elana Saint</h5>
                  <span>Web Designer</span>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/users/user-profile`}>
                    <User />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/appnew/email-app`}>
                    <MessageSquare />
                    Inbox
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/appnew/todo-app`}>
                    <FileText />
                    Taskboard
                  </Link>
                </li>
                <li>
                  <Link to={`${process.env.PUBLIC_URL}/users/user-edit`}>
                    <Settings />
                    Settings
                  </Link>
                </li>
                <li onClick={logOuts}>
                  <LogOut />
                  Logout
                </li>
              </ul>
            </li>
          </ul>
          <div className='d-lg-none mobile-toggle pull-right' onClick={Navmenuhideandshow}>
            <MoreHorizontal />
          </div>
        </div>
        <script id='result-template' type='text/x-handlebars-template'>
          <div className='ProfileCard u-cf'>
            <div className='ProfileCard-avatar'>
              <i className='pe-7s-home'></i>
            </div>
            <div className='ProfileCard-details'>
              <div className='ProfileCard-realName'></div>
            </div>
          </div>
        </script>
        <script id='empty-template' type='text/x-handlebars-template'>
          <div className='EmptyMessage'>Your search turned up 0 results. This most likely means the backend is down, yikes!</div>
        </script>
      </div>
    </div>
  );
};

export default Header;
