import React from "react";
// dashboard
import Default from "../component/general/dashboard/default";
import Crypto from "../component/general/dashboard/crypto";
import Ecommerce from "../component/general/dashboard/ecommerce";

// widgets
import Generalwidgets from "../component/general/widgets/generalwidgets";
import Chartswidgets from "../component/general/widgets/chartswidgets";

// Ui Element
import Typography from "../component/ui-element/typography";
import Button from "../component/ui-element/button";
import Avatars from "../component/ui-element/avatars";
import Helperclasses from "../component/ui-element/helperclasses";
import Grid from "../component/ui-element/grid";
import Tagandpills from "../component/ui-element/tagandpills";
import Progressbars from "../component/ui-element/progressbars";
import Modal from "../component/ui-element/modal";
import Alert from "../component/ui-element/alert/alert";
import Popover from "../component/ui-element/popover/popover";
import Tooltip from "../component/ui-element/tooltip/tooltip";
import Spinner from "../component/ui-element/spinner";
import Dropdown from "../component/ui-element/dropdown/dropdown";
import Tabbootstrap from "../component/ui-element/tabbootstrap";
import Tabline from "../component/ui-element/tabline";
import Navs from "../component/ui-element/navs/navs";
import AccordionsComponent from "../component/ui-element/accordion/accordion";

import Lists from "../component/ui-element/lists";
import Scrollable from "../component/ui-element/scrollable";
import BoostrapNotify from "../component/ui-element/boostrapnotify";
import Ratings from "../component/ui-element/ratings";
import Draganddrop from "../component/ui-element/draganddrop";
import Dropzone from "../component/ui-element/dropzone";

import Tour from "../component/ui-element/tour";
import Sweetalert2 from "../component/ui-element/sweetalert2";
import Carousel from "../component/ui-element/carousel";

import Ribbons from "../component/ui-element/ribbons";
import Pagination from "../component/ui-element/pagination";
import Steps from "../component/ui-element/steps/steps";
import Breadcrumb from "../component/ui-element/breadcrumb";
import Rangeslider from "../component/ui-element/rangeslider";
import Imagecropper from "../component/ui-element/imageCropper/index";
import Stickynotes from "../component/ui-element/stickynotes";
import UploadImage from "../component/ui-element/uploadImage";

// Icons
import Flagicons from "../component/ui-element/icons/flagicons";
import Fontawesomeicons from "../component/ui-element/icons/fontawesomeicons";
import Iconicons from "../component/ui-element/icons/iconicons";
import Feathericons from "../component/ui-element/icons/feathericons";
import Themifyicons from "../component/ui-element/icons/themifyicons";
import Weathericons from "../component/ui-element/icons/weathericons";
import Simplelineicon from "../component/ui-element/icons/simplelineicon";
import Materialdesignicon from "../component/ui-element/icons/materialdesignicon";
import Typicon from "../component/ui-element/icons/typicon";
import Pe7icons from "../component/ui-element/icons/pe7icons";
import Ionicicon from "../component/ui-element/icons/ionic-icon";

// Charts
import Apexcharts from "../component/charts/apexcharts/apexcharts";
import Googlecharts from "../component/charts/googlecharts/googlecharts";
import Chartjs from "../component/charts/chartjscharts/chartjs";

// Forms control
import Formvalidation from "../component/forms/form-control/formvalidation";
import BaseInput from "../component/forms/form-control/baseInput";
import Checkboxandradio from "../component/forms/form-control/checkboxandradio";
import InputGroup from "../component/forms/form-control/inputGroup";
import MegaOption from "../component/forms/form-control/megaOption";

// Form layout
import Formdefault from "../component/forms/form-layout/formdefault";
import Formwizard1 from "../component/forms/form-layout/formwizad1/formwizard1";

// Form Widget
import Datepicker from "../component/forms/form-widget/datepicker";
import Typeahead from "../component/forms/form-widget/typeaheadComponent/typeahead";

// Tables
import Basictable from "../component/tables/basictable";
import Sizingtable from "../component/tables/sizingtable";
import Bordertable from "../component/tables/bordertable";
import Stylingtable from "../component/tables/stylingtable";
import DataTableComponent from "../component/tables/dataTableComponent";

// Cards
import BasicCards from "../component/cards/basicCards";
import ThemeCards from "../component/cards/themeCards";
import TabCard from "../component/cards/tabCard";

// Ecommerce
import Product from "../component/application/ecommerce/product";
import Productpage from "../component/application/ecommerce/productpage";
import Productlist from "../component/application/ecommerce/productlist";
import Productdetails from "../component/application/ecommerce/productdetails";
import Invoice from "../component/application/ecommerce/invoice";
import Pricing from "../component/application/ecommerce/pricing";
import Cart from "../component/application/ecommerce/cart";
import Wishlist from "../component/application/ecommerce/wishlist";
import Checkout from "../component/application/ecommerce/checkout";
import Orderhistory from "../component/application/ecommerce/orderhistory";

// Blog
import Blogsingle from "../component/application/blog/blogsingle";
import Blogdetail from "../component/application/blog/blogdetail";
import Blogpost from "../component/application/blog/blogpost";

// Timeline
import Timeline1 from "../component/application/timelines/timeline";
import Timeline2 from "../component/application/timelines/timeline2";

// Learning
import Learninglist from "../component/application/learning/learning-list";
import Learningdeatil from "../component/application/learning/learning-deatil";

// Gallery
import ImageGallery from "../component/application/gallery/imageGallery";
import ImageWithDesc from "../component/application/gallery/imageWithDesc";
import MesonryGallery from "../component/application/gallery/mesonryGallery";
import MesonryDesc from "../component/application/gallery/mesonryDesc";
import ImageHover from "../component/application/gallery/imageHover";

// job search
import Cardview from "../component/application/jobsearch/cardview";
import Joblist from "../component/application/jobsearch/job-list";
import Jobdetail from "../component/application/jobsearch/job-detail";
import Jobapply from "../component/application/jobsearch/job-apply";

// Users
import Userprofile from "../component/appnew/users/userprofile";
import Useredit from "../component/appnew/users/useredit";
import Usercards from "../component/appnew/users/usercards";

// Social app
import SocialApp from "../component/appnew/social-app/socialApp";

// Editors
import CkEditor from "../component/appnew/editor/CkEditor";
import MdeEditor from "../component/appnew/editor/MdeEditor";
import AceCodeEditor from "../component/appnew/editor/aceCodeEditor";

// FAQ
import FaqComponent from "../component/appnew/others/faqComponent";

// knowledgebase
import KnowledgebaseComponent from "../component/appnew/others/KnowledgebaseComponent";

// Calendar
import BasicCalendar from "../component/appnew/calendar/basicCalendar";
import DraggableCalendar from "../component/appnew/calendar/draggableCalendar";

// Calendar
import GoogleMap from "../component/appnew/map/googleMap";
import MapJsContain from "../component/appnew/map/pigionmap";

// TODO app
import Todo from "../component/appnew/todo-app/todo";

// Email app
import EmailApp from "../component/appnew/email-app/emailDefault";

// Chat app
import ChatApp from "../component/appnew/chat-app/chat";

import Samplepage from "../pages/samplepage";
import Supportticket from "../pages/supportticket";
import Searchwebsite from "../pages/search/searchwebsite";
import LeafletMap from "../component/appnew/map/LeafletMap";

export const routes = [
  {
    path: `/dashboard/default`,
    element: <Default />,
  },
  { path: `/dashboard/crypto`, element: <Crypto /> },
  {
    path: `/dashboard/ecommerce`,
    element: <Ecommerce />,
  },
  {
    path: `/dashboard/generalwidget`,
    element: <Generalwidgets />,
  },
  {
    path: `/dashboard/chartwidget`,
    element: <Chartswidgets />,
  },

  {
    path: `/ui-element/typography`,
    element: <Typography />,
  },
  {
    path: `/ui-element/button`,
    element: <Button />,
  },
  {
    path: `/ui-element/avatar`,
    element: <Avatars />,
  },
  {
    path: `/ui-element/helperclass`,
    element: <Helperclasses />,
  },
  { path: `/ui-element/grid`, element: <Grid /> },
  {
    path: `/ui-element/tagsandpills`,
    element: <Tagandpills />,
  },
  {
    path: `/ui-element/progress-bars`,
    element: <Progressbars />,
  },
  {
    path: `/ui-element/modalComponent`,
    element: <Modal />,
  },
  {
    path: `/ui-element/alertComponent`,
    element: <Alert />,
  },
  {
    path: `/ui-element/popoverComponent`,
    element: <Popover />,
  },
  {
    path: `/ui-element/tooltipsComponent`,
    element: <Tooltip />,
  },
  {
    path: `/ui-element/spinner`,
    element: <Spinner />,
  },
  {
    path: `/ui-element/dropdownComponent`,
    element: <Dropdown />,
  },
  {
    path: `/ui-element/tab-bootstrap`,
    element: <Tabbootstrap />,
  },
  {
    path: `/ui-element/tab-line`,
    element: <Tabline />,
  },
  {
    path: `/ui-element/navsComponent`,
    element: <Navs />,
  },
  {
    path: `/ui-element/accordionComponent`,
    element: <AccordionsComponent />,
  },

  { path: `/ui-element/list`, element: <Lists /> },
  {
    path: `/ui-element/scrollable`,
    element: <Scrollable />,
  },
  {
    path: `/ui-element/bootstrap-notify`,
    element: <BoostrapNotify />,
  },
  {
    path: `/ui-element/rating`,
    element: <Ratings />,
  },
  {
    path: `/ui-element/draganddrop`,
    element: <Draganddrop />,
  },
  {
    path: `/ui-element/dropzone`,
    element: <Dropzone />,
  },

  {
    path: `/ui-element/tourComponent`,
    element: <Tour />,
  },
  {
    path: `/ui-element/sweetAlert`,
    element: <Sweetalert2 />,
  },
  {
    path: `/ui-element/carousel`,
    element: <Carousel />,
  },

  {
    path: `/ui-element/ribbon`,
    element: <Ribbons />,
  },
  {
    path: `/ui-element/pagination`,
    element: <Pagination />,
  },
  { path: `/ui-element/steps`, element: <Steps /> },
  {
    path: `/ui-element/breadcrumb`,
    element: <Breadcrumb />,
  },
  {
    path: `/ui-element/rangeSlider`,
    element: <Rangeslider />,
  },
  {
    path: `/ui-element/imageCropper`,
    element: <Imagecropper />,
  },
  {
    path: `/ui-element/stickyNotes`,
    element: <Stickynotes />,
  },
  {
    path: `/ui-element/image-upload`,
    element: <UploadImage />,
  },

  {
    path: `/ui-element/flagIcons`,
    element: <Flagicons />,
  },
  {
    path: `/ui-element/fontAwsomeIcon`,
    element: <Fontawesomeicons />,
  },
  {
    path: `/ui-element/icoIcons`,
    element: <Iconicons />,
  },
  {
    path: `/ui-element/featherIcons`,
    element: <Feathericons />,
  },
  {
    path: `/ui-element/themifyIcons`,
    element: <Themifyicons />,
  },
  {
    path: `/ui-element/weatherIcons`,
    element: <Weathericons />,
  },
  {
    path: `/ui-element/simplelineIcon`,
    element: <Simplelineicon />,
  },
  {
    path: `/ui-element/materialIcon`,
    element: <Materialdesignicon />,
  },
  {
    path: `/ui-element/typicon`,
    element: <Typicon />,
  },
  {
    path: `/ui-element/pe7Icon`,
    element: <Pe7icons />,
  },
  {
    path: `/ui-element/ionic-icon`,
    element: <Ionicicon />,
  },

  {
    path: `/charts/apexcharts`,
    element: <Apexcharts />,
  },
  {
    path: `/charts/googlecharts`,
    element: <Googlecharts />,
  },
  {
    path: `/charts/chartjscharts`,
    element: <Chartjs />,
  },
  {
    path: `/form/form-validation`,
    element: <Formvalidation />,
  },
  {
    path: `/form/base-input`,
    element: <BaseInput />,
  },
  {
    path: `/form/radio-checkbox-control`,
    element: <Checkboxandradio />,
  },
  {
    path: `/form/input-group`,
    element: <InputGroup />,
  },
  {
    path: `/form/megaoptions`,
    element: <MegaOption />,
  },

  {
    path: `/form/default-form`,
    element: <Formdefault />,
  },
  {
    path: `/form/form-wizard-one`,
    element: <Formwizard1 />,
  },

  {
    path: `/form-widget/datepicker`,
    element: <Datepicker />,
  },
  {
    path: `/form-widget/typeahead`,
    element: <Typeahead />,
  },

  {
    path: `/tables/bootstrap-basic-table`,
    element: <Basictable />,
  },
  {
    path: `/tables/bootstrap-sizing-table`,
    element: <Sizingtable />,
  },
  {
    path: `/tables/bootstrap-border-table`,
    element: <Bordertable />,
  },
  {
    path: `/tables/bootstrap-styling-table`,
    element: <Stylingtable />,
  },
  {
    path: `/tables/data-tables`,
    element: <DataTableComponent />,
  },

  { path: `/cards/basic`, element: <BasicCards /> },
  { path: `/cards/theme`, element: <ThemeCards /> },
  { path: `/cards/tabbed`, element: <TabCard /> },
  {
    path: `/ecommerce-app/product`,
    element: <Product />,
  },
  {
    path: `/ecommerce-app/product-page`,
    element: <Productpage />,
  },
  {
    path: `/ecommerce-app/product-list`,
    element: <Productlist />,
  },
  {
    path: `/ecommerce-app/product-details`,
    element: <Productdetails />,
  },
  {
    path: `/ecommerce-app/orederhistory`,
    element: <Orderhistory />,
  },
  {
    path: `/ecommerce-app/invoice`,
    element: <Invoice />,
  },
  {
    path: `/ecommerce-app/pricing`,
    element: <Pricing />,
  },
  { path: `/ecommerce-app/cart`, element: <Cart /> },
  {
    path: `/ecommerce-app/wishlist`,
    element: <Wishlist />,
  },
  {
    path: `/ecommerce-app/checkout`,
    element: <Checkout />,
  },

  {
    path: `/blog/blog-single`,
    element: <Blogsingle />,
  },
  {
    path: `/blog/blog-details`,
    element: <Blogdetail />,
  },
  { path: `/blog/addpost`, element: <Blogpost /> },

  {
    path: `/timeline/timeline-one`,
    element: <Timeline1 />,
  },
  {
    path: `/timeline/timeline-two`,
    element: <Timeline2 />,
  },

  {
    path: `/learning/learning-list`,
    element: <Learninglist />,
  },
  {
    path: `/learning/detailed-course`,
    element: <Learningdeatil />,
  },

  {
    path: `/gallery/gallery-grid`,
    element: <ImageGallery />,
  },
  {
    path: `/gallery/gallerygrid-desc`,
    element: <ImageWithDesc />,
  },
  {
    path: `/gallery/gallery-masonry`,
    element: <MesonryGallery />,
  },
  {
    path: `/gallery/gallerymasonry-desc`,
    element: <MesonryDesc />,
  },
  {
    path: `/gallery/hover-effect`,
    element: <ImageHover />,
  },

  {
    path: `/job-search/cardview`,
    element: <Cardview />,
  },
  {
    path: `/job-search/listview`,
    element: <Joblist />,
  },
  {
    path: `/job-search/job-details`,
    element: <Jobdetail />,
  },
  {
    path: `/job-search/apply`,
    element: <Jobapply />,
  },

  {
    path: `/users/user-profile`,
    element: <Userprofile />,
  },
  {
    path: `/users/user-edit`,
    element: <Useredit />,
  },
  {
    path: `/users/user-cards`,
    element: <Usercards />,
  },

  {
    path: `/appnew/social-app`,
    element: <SocialApp />,
  },

  {
    path: `/editors/ck-editor`,
    element: <CkEditor />,
  },
  {
    path: `/editors/mde-editor`,
    element: <MdeEditor />,
  },
  {
    path: `/editors/ace-code-editor`,
    element: <AceCodeEditor />,
  },

  { path: `/others/faq`, element: <FaqComponent /> },
  {
    path: `/others/knowledgebase`,
    element: <KnowledgebaseComponent />,
  },

  {
    path: `/appnew/email-app`,
    element: <EmailApp />,
  },

  { path: `/appnew/chat-app`, element: <ChatApp /> },

  {
    path: `/calender/basic`,
    element: <BasicCalendar />,
  },
  {
    path: `/calender/advance`,
    element: <DraggableCalendar />,
  },

  {
    path: `/map/google-map`,
    element: <GoogleMap />,
  },
  {
    path: `/map/leaflet-map`,
    element: <LeafletMap />,
  },
  {
    path: `/map/pigeon-maps`,
    element: <MapJsContain />,
  },

  { path: `/appnew/todo-app`, element: <Todo /> },
  {
    path: `/pages/sample-page`,
    element: <Samplepage />,
  },
  {
    path: `/pages/support-ticket`,
    element: <Supportticket />,
  },
  {
    path: `/pages/search`,
    element: <Searchwebsite />,
  },
];
