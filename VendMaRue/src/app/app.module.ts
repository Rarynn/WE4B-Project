import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HeaderComponent } from './header/header.component';//enlever apre
import { CardComponent } from './card/card.component';
import { PopupCardComponent } from './popup-card/popup-card.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfilComponent } from './profil/profil.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import { NewSidenavComponent } from './new-sidenav/new-sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    CardComponent,
    PopupCardComponent,
    InscriptionComponent,
    ConnexionComponent,
    CommentComponent,
    CommentsListComponent,
    FooterComponent,
    ProfilComponent,
    NewHeaderComponent,
    NewSidenavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
