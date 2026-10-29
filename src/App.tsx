import { AppRouter } from "./app/router/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/AuthProvider";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </BrowserRouter>
  );
}
