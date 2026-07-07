import { Routes } from '@angular/router';

import { MainLayout } from '../layouts/main-layout/main-layout';
import { AuthenticationLayout } from '../layouts/authentication-layout/authentication-layout';
import { ClearLayout } from '../layouts/clear-layout/clear-layout';

import { Homepage } from '../pages/homepage/homepage';
import { Loginpage } from '../pages/loginpage/loginpage';
import { Registerpage } from '../pages/registerpage/registerpage';
import { Privacypage } from '../pages/privacypage/privacypage';
import { Termspage } from '../pages/termspage/termspage';
import { Cookiespage } from '../pages/cookiespage/cookiespage';

export const routes: Routes = [
    {
        path :  "",
        component: MainLayout,
        children: [
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "home", component: Homepage               },
        ]
    },
    {
        path : "auth",
        component: AuthenticationLayout,
        children: [
            { path: "login"          , component: Loginpage    },
            { path: "register"       , component: Registerpage },
            { path: "forgot-passowrd", component: Registerpage },
        ]
    },
    {
        path : "legal",
        component: ClearLayout,
        children: [
            { path: "privacy", component: Privacypage },
            { path: "terms"  , component: Termspage   },
            { path: "cookies", component: Cookiespage },
        ]
    }

];
