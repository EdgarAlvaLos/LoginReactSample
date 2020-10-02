const PUBLIC_URL = process.env.PUBLIC_URL;
const REACT_APP_MT_URL = process.env.REACT_APP_MT_URL;

export const APIContext = {
         vestaConfig: {
           proxy: { url: REACT_APP_MT_URL },
           ui: {
             debugMode: false,
             url: PUBLIC_URL,
             path: PUBLIC_URL,
             documentationUrl: "",
             supportUrl: "",
             vPortalLoginUrl: "",
             apiBasePathURL: "",
           },
         },
         currentProgram: "Admin",
         Sidebar: null,
         ProgramSelect: null,

         releaseNotesUrl: "",
         serviceCalls: null,
         /*
    searchMap is a Map to store objects using the instance name as key.
    the object must contain: 
        a description property: description of the instance
        a indexType property: type of instance
            1: API
            2: Param
    */
         searchMap: new Map(),
         elementToFocus: null,
         currentSlug: null,
         leftMenuSelectedElement: null,
         leftMenuAPIFocused: null,
         leftMenuCoreResourse: [],
         programs: [
           { key: 1, text: "Payment Protect", value: "/payment-protect" },
           { key: 2, text: "Payment Guarantee", value: "/payment-guarantee" },
           { key: 3, text: "Guarantee Plus", value: "/guarantee-plus" },
           {
             key: 4,
             text: "Enterprise Acquiring",
             value: "/enterprise-acquiring",
           },
         ],
       };
