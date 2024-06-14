import routes from "../config/Config.js";
import DiamondCalculate from "../pages/calculate/DiamondCalculate.jsx";
import DiamondCheck from "../pages/check/DiamondCheck.jsx";
import DiamondCheckDetails from "../pages/check/DiamondCheckDetails.jsx";
import Detail from "../pages/detail/Detail.jsx";
import DiamondService from "../pages/services/DiamondService.jsx";
import DiamondValuationRequest from "../pages/valuate/DiamondValuationRequest.jsx";
import EducationCarat from "../pages/education/EducationCarat.jsx";
import EducationCertificate from "../pages/education/EducationCertificate.jsx";
import EducationClarity from "../pages/education/EducationClarity.jsx";
import EducationColor from "../pages/education/EducationColor.jsx";
import EducationCut from "../pages/education/EducationCut.jsx";
import EducationShape from "../pages/education/EducationShape.jsx";
import HomePage from "../pages/Home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import Logout from "../pages/logout/Logout.jsx";
import Prices from "../pages/prices/Prices.jsx";
import Search from "../pages/Search/Search.jsx";
import ConsultingStaffPage from "../pages/consultingStaff/ConsultingStaffPage.jsx";
import Error from "../pages/error/Error.jsx";
import ValuationStaffPage from "../pages/valuationStaff/ValuationStaffPage.jsx";
import DashBoardLayout from "../layout/DashBoardLayout.jsx";
import ConsultingDashBoard from "../pages/dashboard/consulting/ConsultingDashBoard.jsx";
import ConsultingAppointment from "../pages/dashboard/consulting/ConsultingAppointment.jsx";
import ConsultingNotifications from "../pages/dashboard/consulting/ConsultingNotifications.jsx";
import ConsultingPrice from "../pages/dashboard/consulting/ConsultingPrice.jsx";
import ConsultingSearch from "../pages/dashboard/consulting/ConsultingSearch.jsx";
import ConsultingRequest from "../pages/dashboard/consulting/ConsultingRequest.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import DashBoard from "../pages/dashboard/DashBoard.jsx";
import DashBoardNotification from './../pages/dashboard/DashBoardNotification';
import DashBoardPrices from './../pages/dashboard/DashBoardPrices';
import DashBoardAppoint from './../pages/dashboard/DashBoardAppoint';
import DashBoardSearch from './../pages/dashboard/DashBoardSearch';
import DashBoardRequest from './../pages/dashboard/DashBoardRequest';

const ALlRoutes = [
    {
        path: routes.home,
        component: HomePage,
    },
    {
        path: routes.admin,
        component: AdminPage,
    },
    {
        path: routes.search,
        component: Search,
    },
    {
        path: routes.diamondCheck,
        component: DiamondCheck,
    },
    {
        path: routes.diamondCheckDetails,
        component: DiamondCheckDetails,
    },
    {
        path: routes.diamondDetail,
        component: Detail,
    },

    {
        path: routes.diamondCalculate,
        component: DiamondCalculate,
    },
    {
        path: routes.diamondService,
        component: DiamondService,
    },

  {
    path: routes.educationShape,
    component: EducationShape,
  },
  {
    path: routes.educationCarat,
    component: EducationCarat,
  },
  {
    path: routes.educationColor,
    component: EducationColor,
  },
  {
    path: routes.educationCut,
    component: EducationCut,
  },
  {
    path: routes.educationClarity,
    component: EducationClarity,
  },
  {
    path: routes.login,
    component: Login,
  },
  {
    path: routes.logout,
    component: Logout,
  },
  {
    path: routes.consultingStaff,
    component: ConsultingStaffPage,
  },
  {
    path: routes.error,
    component: Error,
  },

    {
        path: routes.diamondValuationRequest,
        component: DiamondValuationRequest,
    },
    {
        path: routes.prices,
        component: Prices,
    },
    {
        path: routes.educationCertificate,
        component: EducationCertificate,
    },

    {
        path: routes.educationShape,
        component: EducationShape,
    },
    {
        path: routes.educationCarat,
        component: EducationCarat,
    },
    {
        path: routes.educationColor,
        component: EducationColor,
    },
    {
        path: routes.educationCut,
        component: EducationCut,
    },
    {
        path: routes.educationClarity,
        component: EducationClarity,
    },
    {
        path: routes.login,
        component: Login,
    },
    {
        path: routes.logout,
        component: Logout,
    },
    {
        path: routes.consultingStaff,
        component: ConsultingStaffPage,
    },
    {
        path: routes.valuationStaff,
        component: ValuationStaffPage,
    },
    //DashBoard => add layout: DashBoardLayout
    // Consulting Staff
    {
        path: routes.consulting_dashboard,
        component: ConsultingDashBoard,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dasboardNotification,
        component: ConsultingNotifications,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardPrices,
        component: ConsultingPrice,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardAppoint,
        component: ConsultingAppointment,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardSearch,
        component: ConsultingSearch,
        layout: DashBoardLayout,
    },
    {
        path: routes.consulting_dashboardRequest,
        component: ConsultingRequest,
        layout: DashBoardLayout,
    },
    // Customer
    {
        path: routes.dashboard,
        component: DashBoard,
        layout: DashBoardLayout,
    },
    {
        path: routes.dasboardNotification,
        component: DashBoardNotification,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardPrices,
        component: DashBoardPrices,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardAppoint,
        component: DashBoardAppoint,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardSearch,
        component: DashBoardSearch,
        layout: DashBoardLayout,
    },
    {
        path: routes.dashboardRequest,
        component: DashBoardRequest,
        layout: DashBoardLayout,
    },
];

export { ALlRoutes };
