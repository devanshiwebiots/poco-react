import React from "react";
export const MENUITEMS = [
  {
    title: "General",
    icon: <i className="pe-7s-home pe-lg"></i>,
    path: `/dashboard/default`,
    type: "sub",
    active: true,
    bookmark: true,
    children: [
      { title: "Dashboard", type: "sub" },
      {
        title: "Default",
        type: "link",
        path: `/dashboard/default`,
      },
      {
        title: "Crypto",
        type: "link",
        path: `/dashboard/crypto`,
      },
      {
        title: "Ecommerce",
        type: "link",
        path: `/dashboard/ecommerce`,
      },
      { title: "Widgets", type: "sub-header" },
      {
        title: "General widget",
        type: "link",
        path: `/dashboard/generalwidget`,
      },
      {
        title: "Chart widget",
        type: "link",
        path: `/dashboard/chartwidget`,
      },
    ],
  },
  {
    title: "UI Kits",
    icon: <i className="pe-7s-portfolio pe-lg"></i>,
    type: "sub",
    path: `/ui-element/typography`,
    active: false,
    bookmark: true,
    children: [
      { title: "Ui Elements", type: "sub" },
      {
        title: "Typography",
        type: "link",
        path: `/ui-element/typography`,
      },
      {
        title: "Buttons ",
        type: "link",
        path: `/ui-element/button`,
      },
      {
        title: "Avatars",
        type: "link",
        path: `/ui-element/avatar`,
      },
      {
        title: "helper classes",
        type: "link",
        path: `/ui-element/helperclass`,
      },
      {
        title: "Grid ",
        type: "link",
        path: `/ui-element/grid`,
      },
      {
        title: "Tag & pills",
        type: "link",
        path: `/ui-element/tagsandpills`,
      },
      {
        title: "Modal",
        type: "link",
        path: `/ui-element/modalComponent`,
      },
      {
        title: "Progress",
        type: "link",
        path: `/ui-element/progress-bars`,
      },
      {
        title: "Alert ",
        type: "link",
        path: `/ui-element/alertComponent`,
      },
      {
        title: "Popover",
        type: "link",
        path: `/ui-element/popoverComponent`,
      },
      {
        title: "Tooltip",
        type: "link",
        path: `/ui-element/tooltipsComponent`,
      },
      {
        title: "Spinners ",
        type: "link",
        path: `/ui-element/spinner`,
      },
      {
        title: "Dropdown",
        type: "link",
        path: `/ui-element/dropdownComponent`,
      },
      {
        title: "Bootstrap Tabs",
        type: "link",
        path: `/ui-element/tab-bootstrap`,
      },
      {
        title: "Line Tabs ",
        type: "link",
        path: `/ui-element/tab-line`,
      },
      {
        title: "Accordion",
        type: "link",
        path: `/ui-element/accordionComponent`,
      },
      {
        title: "Navs",
        type: "link",
        path: `/ui-element/navsComponent`,
      },
      {
        title: "Lists ",
        type: "link",
        path: `/ui-element/list`,
      },
      {
        title: "Scrollable",
        type: "link",
        path: `/ui-element/scrollable`,
      },
      {
        title: "Bootstrap Notify ",
        type: "link",
        path: `/ui-element/bootstrap-notify`,
      },
      {
        title: "Rating",
        type: "link",
        path: `/ui-element/rating`,
      },
      {
        title: "Drag And Drop",
        type: "link",
        path: `/ui-element/draganddrop`,
      },
      {
        title: "Dropzone",
        type: "link",
        path: `/ui-element/dropzone`,
      },
      {
        title: "Tour ",
        type: "link",
        path: `/ui-element/tourComponent`,
      },
      {
        title: "SweetAlert2",
        type: "link",
        path: `/ui-element/sweetAlert`,
      },
      {
        title: "Owl Carousel",
        type: "link",
        path: `/ui-element/carousel`,
      },
      {
        title: "Ribbons ",
        type: "link",
        path: `/ui-element/ribbon`,
      },
      {
        title: "Pagination",
        type: "link",
        path: `/ui-element/pagination`,
      },
      {
        title: "Steps",
        type: "link",
        path: `/ui-element/steps`,
      },
      {
        title: "Breadcrumb ",
        type: "link",
        path: `/ui-element/breadcrumb`,
      },
      {
        title: "Range Slider",
        type: "link",
        path: `/ui-element/rangeSlider`,
      },
      {
        title: "Image cropper",
        type: "link",
        path: `/ui-element/imageCropper`,
      },
      {
        title: "Sticky ",
        type: "link",
        path: `/ui-element/stickyNotes`,
      },
      {
        title: "Upload ",
        type: "link",
        path: `/ui-element/image-upload`,
      },
      { title: "Icons", type: "sub-header" },
      {
        title: "Fontawesome Icon ",
        type: "link",
        path: `/ui-element/fontAwsomeIcon`,
      },
      {
        title: "Ico Icon ",
        type: "link",
        path: `/ui-element/icoIcons`,
      },
      {
        title: "Feather icon ",
        type: "link",
        path: `/ui-element/featherIcons`,
      },
      {
        title: "Themify Icon ",
        type: "link",
        path: `/ui-element/themifyIcons`,
      },
      {
        title: "Weather Icon ",
        type: "link",
        path: `/ui-element/weatherIcons`,
      },
      {
        title: "pe7 icon",
        type: "link",
        path: `/ui-element/pe7Icon`,
      },
      {
        title: "Ionic Icon ",
        type: "link",
        path: `/ui-element/ionic-icon`,
      },
    ],
  },
  {
    title: "Forms",
    icon: <i className="pe-7s-note2"></i>,
    type: "sub",
    path: `/form/form-validation`,
    active: false,
    children: [
      { title: "Form Controls", type: "sub" },
      {
        title: "Form Validation",
        type: "link",
        path: `/form/form-validation`,
      },
      {
        title: "Base Inputs",
        type: "link",
        path: `/form/base-input`,
      },
      {
        title: "Checkbox & Radio ",
        type: "link",
        path: `/form/radio-checkbox-control`,
      },
      {
        title: "Input Groups",
        type: "link",
        path: `/form/input-group`,
      },
      {
        title: "Mega Options",
        type: "link",
        path: `/form/megaoptions`,
      },

      { title: "Form Widgets", type: "sub-header" },
      {
        title: "Datepicker",
        type: "link",
        path: `/form-widget/datepicker`,
      },
      {
        title: "Typeahead",
        type: "link",
        path: `/form-widget/typeahead`,
      },

      { title: "Form Layout", type: "sub-header" },
      {
        title: "Default Forms",
        type: "link",
        path: `/form/default-form`,
      },
      {
        title: "Form Wizard 1",
        type: "link",
        path: `/form/form-wizard-one`,
      },
    ],
  },
  {
    title: "Tables",
    icon: <i className="pe-7s-id"></i>,
    type: "sub",
    path: `/tables/bootstrap-basic-table`,
    active: false,
    children: [
      { title: "Bootstrap Tables", type: "sub" },
      {
        title: "Basic Tables",
        type: "link",
        path: `/tables/bootstrap-basic-table`,
      },
      {
        title: "Sizing Tables",
        type: "link",
        path: `/tables/bootstrap-sizing-table`,
      },
      {
        title: "Border Tables",
        type: "link",
        path: `/tables/bootstrap-border-table`,
      },
      {
        title: "Styling Tables",
        type: "link",
        path: `/tables/bootstrap-styling-table`,
      },
      { title: "Data Tables", type: "sub-header" },
      {
        title: "Data Tables",
        type: "link",
        path: `/tables/data-tables`,
      },
    ],
  },
  {
    title: "Cards",
    icon: <i className="pe-7s-browser"></i>,
    type: "sub",
    path: `/cards/basic`,
    active: false,
    children: [
      { title: "Cards", type: "sub" },
      {
        title: "Basic Card",
        type: "link",
        path: `/cards/basic`,
      },
      {
        title: "Theme Card",
        type: "link",
        path: `/cards/theme`,
      },
      {
        title: "Tabbed Card",
        type: "link",
        path: `/cards/tabbed`,
      },
    ],
  },
  {
    title: "Charts",
    icon: <i className="pe-7s-graph3"></i>,
    type: "sub",
    path: `/charts/apexcharts`,
    active: false,
    children: [
      { title: "Charts", type: "sub" },
      {
        title: "Apex Chart",
        type: "link",
        path: `/charts/apexcharts`,
      },
      {
        title: "Google Chart",
        type: "link",
        path: `/charts/googlecharts`,
      },
      {
        title: "Chartjs Chart",
        type: "link",
        path: `/charts/chartjscharts`,
      },
    ],
  },
  {
    title: "Apps",
    icon: <i className="pe-7s-server"></i>,
    type: "sub",
    path: `/ecommerce-app/product`,
    active: false,
    children: [
      { title: "Ecommerce", type: "sub" },
      {
        title: "Product",
        type: "link",
        path: `/ecommerce-app/product`,
      },
      {
        title: "Product page",
        type: "link",
        path: `/ecommerce-app/product-page`,
      },
      {
        title: "Product list ",
        type: "link",
        path: `/ecommerce-app/product-list`,
      },
      {
        title: "Payment Details",
        type: "link",
        path: `/ecommerce-app/product-details`,
      },
      {
        title: "Order History",
        type: "link",
        path: `/ecommerce-app/orederhistory`,
      },
      {
        title: "Cart",
        type: "link",
        path: `/ecommerce-app/cart`,
      },
      {
        title: "Wishlist",
        type: "link",
        path: `/ecommerce-app/wishlist`,
      },
      {
        title: "Invoice",
        type: "link",
        path: `/ecommerce-app/invoice`,
      },
      {
        title: "Pricing",
        type: "link",
        path: `/ecommerce-app/pricing`,
      },
      { title: "Blog", type: "sub-header" },
      {
        title: "Blog Details",
        type: "link",
        path: `/blog/blog-details`,
      },
      {
        title: "Blog Single",
        type: "link",
        path: `/blog/blog-single`,
      },
      {
        title: "Add Post",
        type: "link",
        path: `/blog/addpost`,
      },
      { title: "Timeline", type: "sub-header" },
      {
        title: "Timeline 1",
        type: "link",
        path: `/timeline/timeline-one`,
      },
      {
        title: "Timeline 2",
        type: "link",
        path: `/timeline/timeline-two`,
      },
      { title: "Gallery", type: "sub-header" },
      {
        title: "Gallery Grid",
        type: "link",
        path: `/gallery/gallery-grid`,
      },
      {
        title: "Gallery Grid with Desc",
        type: "link",
        path: `/gallery/gallerygrid-desc`,
      },
      {
        title: "Masonry Gallery",
        type: "link",
        path: `/gallery/gallery-masonry`,
      },
      {
        title: "Masonry Gallery Desc",
        type: "link",
        path: `/gallery/gallerymasonry-desc`,
      },
      {
        title: "Hover Effects",
        type: "link",
        path: `/gallery/hover-effect`,
      },
      { title: "Job Search", type: "sub-header" },
      {
        title: "Cards view",
        type: "link",
        path: `/job-search/cardview`,
      },
      {
        title: "List View",
        type: "link",
        path: `/job-search/listview`,
      },
      {
        title: "Job Details",
        type: "link",
        path: `/job-search/job-details`,
      },
      {
        title: "Apply",
        type: "link",
        path: `/job-search/apply`,
      },
      { title: "Learning", type: "sub-header" },
      {
        title: "Learning List",
        type: "link",
        path: `/learning/learning-list`,
      },
      {
        title: "Detailed Course",
        type: "link",
        path: `/learning/detailed-course`,
      },
    ],
  },
  {
    title: "Apps",
    tag: <span className="badge rounded-pill badge-primary">New</span>,
    icon: <i className="pe-7s-gift pe-lg"></i>,
    type: "sub",
    active: false,
    path: `/users/user-profile`,
    bookmark: true,
    children: [
      { title: "User", type: "sub" },
      {
        title: "Users Profile",
        type: "link",
        path: `/users/user-profile`,
      },
      {
        title: "Users Edit",
        type: "link",
        path: `/users/user-edit`,
      },
      {
        title: "Users Cards ",
        type: "link",
        path: `/users/user-cards`,
      },
      {
        title: "Email App",
        type: "link",
        path: `/appnew/email-app`,
      },
      {
        title: "Chat App",
        type: "link",
        path: `/appnew/chat-app`,
      },
      {
        title: "Full Calender Basic ",
        type: "link",
        path: `/calender/basic`,
      },
      {
        title: "Full Calender Advance",
        type: "link",
        path: `/calender/advance`,
      },
      {
        title: "Social App",
        type: "link",
        path: `/appnew/social-app`,
      },
      {
        title: "To-Do",
        type: "link",
        path: `/appnew/todo-app`,
      },
      { title: "Editors", type: "sub-header" },
      {
        title: "CK editor",
        type: "link",
        path: `/editors/ck-editor`,
      },
      {
        title: "MDE editor ",
        type: "link",
        path: `/editors/mde-editor`,
      },
      {
        title: "ACE code editor",
        type: "link",
        path: `/editors/ace-code-editor`,
      },

      { title: "Others", type: "sub-header" },
      {
        title: "FAQ",
        type: "link",
        path: `/others/faq`,
      },
      {
        title: "Knowledgebase ",
        type: "link",
        path: `/others/knowledgebase`,
      },

      { title: "Maps", type: "sub-header" },
      {
        title: "Google Maps",
        type: "link",
        path: `/map/google-map`,
      },
      {
        title: "Leaflet Maps",
        type: "link",
        path: `/map/leaflet-map`,
      },
      {
        title: "Pigeon Maps",
        type: "link",
        path: `/map/pigeon-maps`,
      },
    ],
  },
  {
    title: "Pages",
    icon: <i className="pe-7s-copy-file"></i>,
    type: "sub",
    path: `/pages/sample-page`,
    active: false,
    children: [
      { title: "All Pages", type: "sub" },
      {
        title: "Sample page",
        type: "link",
        path: `/pages/sample-page`,
      },
      {
        title: "Support Ticket",
        type: "link",
        path: `/pages/support-ticket`,
      },
      {
        title: "Search Website ",
        type: "link",
        path: `/pages/search`,
      },
      {
        title: "Error 400",
        type: "link",
        path: `/pages/error-400`,
      },
      {
        title: "Error 404",
        type: "link",
        path: `/pages/error-404`,
      },
      {
        title: "Error 500",
        type: "link",
        path: `/pages/error-500`,
      },
      {
        title: "Maintenance",
        type: "link",
        path: `/pages/maintenance`,
      },
      {
        title: "Login Simple",
        type: "link",
        path: `/pages/login`,
      },
      {
        title: "Register Simple",
        type: "link",
        path: `/pages/register`,
      },
      {
        title: "Forget Password",
        type: "link",
        path: `/pages/forget-password`,
      },
      {
        title: "Coming Soon",
        type: "link",
        path: `/pages/comingsoon`,
      },
      {
        title: "Coming with Bg video",
        type: "link",
        path: `/pages/comingsoon-bg-video`,
      },
      {
        title: "Coming with Bg Image",
        type: "link",
        path: `/pages/comingsoon-bg-image`,
      },
    ],
  },
];
