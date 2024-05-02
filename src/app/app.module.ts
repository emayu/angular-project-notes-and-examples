import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { TitleCasePipeCustom } from './titleCaseCustom.pipe';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component'
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { StarComponent } from './star/star.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ViewContactFormComponent } from './contact-form/view-contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TopicListFormComponent } from './topic-list-form/topic-list-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';

import { ENgSwitchComponent } from './directives/ng-switch/e-ng-switch.component';
import { ViewNgSwitch } from './directives/ng-switch/view-ng-switch.component';
import { SectionSevenComponent } from './sections/section-seven/section-seven.component';
import { SectionEigthComponent } from './sections/section-eigth/section-eigth.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    StarComponent,
    SummaryPipe,
    TitleCasePipeCustom,
    SignupFormComponent,
    FavoriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    ViewContactFormComponent,
    CourseFormComponent,
    TopicListFormComponent,
    PasswordChangeFormComponent,
    PostsComponent,
    ENgSwitchComponent,
    ViewNgSwitch,
    SectionSevenComponent,
    SectionEigthComponent,
    FormArrayExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    PostService,
    { provide:ErrorHandler, useClass:AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
