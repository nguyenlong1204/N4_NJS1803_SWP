import { lazy } from "react";
import routes from "../config/Config.js";
const DiamondCalculate = lazy(() =>
  import("../pages/calculate/DiamondCalculate.jsx")
);
const DiamondCheck = lazy(() => import("../pages/check/DiamondCheck.jsx"));
const DiamondCheckDetails = lazy(() =>
  import("../pages/check/DiamondCheckDetails.jsx")
);
const Detail = lazy(() => import("../pages/detail/Detail.jsx"));
const DiamondService = lazy(() =>
  import("../pages/services/DiamondService.jsx")
);
const DiamondValuationRequest = lazy(() =>
  import("../pages/valuate/DiamondValuationRequest")
);
const EducationCarat = lazy(() =>
  import("../pages/education/EducationCarat.jsx")
);
const EducationCertificate = lazy(() =>
  import("../pages/education/EducationCertificate.jsx")
);
const EducationClarity = lazy(() =>
  import("../pages/education/EducationClarity.jsx")
);
const EducationColor = lazy(() =>
  import("../pages/education/EducationColor.jsx")
);
const EducationCut = lazy(() => import("../pages/education/EducationCut.jsx"));
const EducationShape = lazy(() =>
  import("../pages/education/EducationShape.jsx")
);
const FAQs = lazy(() => import("../pages/FAQ/FAQs.jsx"));
const HomePage = lazy(() => import("../pages/Home/Home.jsx"));
const Logout = lazy(() => import("../pages/logout/Logout.jsx"));
const Prices = lazy(() => import("../pages/prices/Prices.jsx"));
const Error = lazy(() => import("../pages/error/Error.jsx"));
import DashBoardLayout from "../layout/DashBoardLayout.jsx";
const DashBoard = lazy(() => import("../pages/dashboard/DashBoard.jsx"));
import DashBoardNotification from "../pages/dashboard/DashBoardNotification.jsx";
import DashBoardAppoint from "../pages/dashboard/DashBoardAppoint.jsx";
import Login from "../pages/login/Login.jsx";
const AboutUs = lazy(() => import("../pages/aboutUs/AboutUs.jsx"));
const DashBoardSetting = lazy(() =>
  import("../pages/dashboard/DashBoardSetting.jsx")
);
import DashBoardTransaction from "../pages/dashboard/DashBoardTransaction.jsx";
import PendingRequestTable from "../pages/dashboard/table/PendingRequestTable.jsx";
import ProcessRequestTable from "../pages/dashboard/table/ProcessRequestTable.jsx";
import SealingLetterTable from "../pages/dashboard/table/SealingLetterTable.jsx";
import CommitmentTable from "../pages/dashboard/table/CommitmentTable.jsx";
import ValuationStaffDashboard from "../pages/dashboard/valuation/ValuationStaffDashBoard.jsx";
import AdminPage from "../pages/admin/AdminPage.jsx";
import ServiceTable from "../pages/dashboard/table/ServiceTable.jsx";
const Activate = lazy(() => import("../pages/signUp/Activate.jsx"));
const ResetForgetPassword = lazy(() =>
  import("../pages/login/ResetForgetPassword.jsx")
);
const ForgotPassword = lazy(() => import("../pages/login/ForgotPassword.jsx"));
const ALlRoutes = [
  {
    path: routes.home,
    component: HomePage,
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
    path: routes.prices,
    component: Prices,
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
    path: routes.FAQs,
    component: FAQs,
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
    path: routes.error,
    component: Error,
    layout: null,
  },
  {
    path: routes.aboutUs,
    component: AboutUs,
  },

  {
    path: routes.diamondValuationRequest,
    component: DiamondValuationRequest,
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
    path: routes.dashboardAppoint,
    component: DashBoardAppoint,
    layout: DashBoardLayout,
  },
  {
    path: routes.dashboardTransaction,
    component: DashBoardTransaction,
    layout: DashBoardLayout,
  },
  {
    path: routes.dashboardSetting,
    component: DashBoardSetting,
  },
  {
    path: routes.manageAccount,
    component: AdminPage,
    layout: DashBoardLayout,
  },
  {
    path: routes.pendingRequest,
    component: PendingRequestTable,
    layout: DashBoardLayout,
  },
  {
    path: routes.processRequest,
    component: ProcessRequestTable,
    layout: DashBoardLayout,
  },
  {
    path: routes.sealingLetter,
    component: SealingLetterTable,
    layout: DashBoardLayout,
  },
  {
    path: routes.commitment,
    component: CommitmentTable,
    layout: DashBoardLayout,
  },
  {
    path: routes.valuationDiamond,
    component: ValuationStaffDashboard,
    layout: DashBoardLayout,
  },
  {
    path: routes.manageService,
    component: ServiceTable,
    layout: DashBoardLayout,
  },
  {
    path: routes.activate,
    component: Activate,
    layout: null,
  },
  {
    path: routes.forgetPassword,
    component: ForgotPassword,
    layout: null,
  },
  {
    path: routes.resetForgetPassword,
    component: ResetForgetPassword,
    layout: null,
  },
];

export { ALlRoutes };
