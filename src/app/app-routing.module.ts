import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'characters', loadChildren: './characters/characters.module#CharactersPageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'species', loadChildren: './species/species.module#SpeciesPageModule' },
  { path: 'starships', loadChildren: './starships/starships.module#StarshipsPageModule' },
  { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesPageModule' },
  { path: 'planets', loadChildren: './planets/planets.module#PlanetsPageModule' },
  { path: 'character-detail', loadChildren: './characters/character-detail/character-detail.module#CharacterDetailPageModule' },
  { path: 'film-detail', loadChildren: './films/film-detail/film-detail.module#FilmDetailPageModule' },
  { path: 'species-details', loadChildren: './species/species-details/species-details.module#SpeciesDetailsPageModule' },
  { path: 'vehicle-details', loadChildren: './vehicles/vehicle-details/vehicle-details.module#VehicleDetailsPageModule' },
  { path: 'starship-details', loadChildren: './starships/starship-details/starship-details.module#StarshipDetailsPageModule' },
  { path: 'planet-details', loadChildren: './planets/planet-details/planet-details.module#PlanetDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
