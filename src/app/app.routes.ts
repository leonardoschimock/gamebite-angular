import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MinecraftComponent } from './pages/minecraft/minecraft.component';
import { OvercookedComponent } from './pages/overcooked/overcooked.component';
import { StardewComponent } from './pages/stardew/stardew.component';

export const routes: Routes = [
{
    path: '',
    component: HomeComponent
},
{
    path: 'minecraft',
    component: MinecraftComponent
},
{
    path: 'overcooked',
    component: OvercookedComponent
},
{
    path: 'stardew',
    component: StardewComponent
},
{
    path: '**',
    redirectTo: ''
}
];