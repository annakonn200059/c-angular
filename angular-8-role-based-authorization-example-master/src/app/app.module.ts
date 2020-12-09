import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { ExpensesComponent } from './admin/expenses/expenses.component'
;
import { ShowExpComponent } from './admin/expenses/show-exp/show-exp.component'
;
import{SharedService} from 'src/app/shared.service';
import { AddEditExpComponent } from './admin/expenses/add-edit-exp/add-edit-exp.component';
import{AddEditExpUComponent} from './home/expensesu/add-edit-exp-u/add-edit-exp-u.component';
import { ShowExpUComponent } from './home/expensesU/show-exp-u/show-exp-u.component';
import { ExpensesuComponent } from './home/expensesu/expensesu.component';
import { GoalsComponent } from './admin/goals/goals.component'
;
import { AddEditGoalsComponent } from './admin/goals/add-edit-goals/add-edit-goals.component'
import { ShowGoalsComponent } from './admin/goals/show-goals/show-goals.component';
import{InjuriesComponent} from './admin/injuries/injuries.component';
import {AddEditInjComponent} from './admin/injuries/add-edit-inj/add-edit-inj.component';
import {ShowInjComponent} from './admin/injuries/show-inj/show-inj.component';
import {InjurylistComponent} from './admin/injurylist/injurylist.component';
import {AddEditInjLComponent} from './admin/injurylist/add-edit-inj-l/add-edit-inj-l.component';
import {ShowInjLComponent} from './admin/injurylist/show-inj-l/show-inj-l.component';
import {ManagementworkersComponent} from './admin/managementworkers/managementworkers.component';
import {AddEditManwComponent} from './admin/managementworkers/add-edit-manw/add-edit-manw.component';
import {ShowManwComponent} from './admin/managementworkers/show-manw/show-manw.component';
import { MatchesComponent} from './admin/matches/matches.component';
import {AddEditMatchComponent} from './admin/matches/add-edit-match/add-edit-match.component';
import {ShowMatchComponent} from './admin/matches/show-match/show-match.component';


import { OpponentsComponent } from './admin/opponents/opponents.component';
import { ShowOppComponent } from './admin/opponents/show-opp/show-opp.component'
;
import { AddEditOppComponent } from './admin/opponents/add-edit-opp/add-edit-opp.component'
;
import { PlaceComponent } from './admin/place/place.component'
;
import { ShowPlaceComponent } from './admin/place/show-place/show-place.component'
;
import { AddEditPlaceComponent } from './admin/place/add-edit-place/add-edit-place.component';
import { PlayerComponent } from './admin/player/player.component';
import {AddEditPlayComponent} from './admin/player/add-edit-play/add-edit-play.component';
import {ShowPlayComponent} from './admin/player/show-play/show-play.component';
import {SeasonsComponent} from './admin/seasons/seasons.component';
import {AddEditSeasonComponent} from './admin/seasons/add-edit-season/add-edit-season.component';
import {ShowSeasonComponent} from './admin/seasons/show-season/show-season.component';
import {SeasontimetableComponent} from './admin/seasontimetable/seasontimetable.component';
import {AddEditSttComponent} from './admin/seasontimetable/add-edit-stt/add-edit-stt.component';
import {ShowSttComponent} from './admin/seasontimetable/show-stt/show-stt.component';
import {TeamComponent} from './admin/team/team.component';
import {ShowTeamComponent} from './admin/team/show-team/show-team.component';
import {AddEditTeamComponent} from './admin/team/add-edit-team/add-edit-team.component';
import {TrainersComponent} from './admin/trainers/trainers.component';
import {AddEditTrainComponent} from './admin/trainers/add-edit-train/add-edit-train.component';
import {ShowTrainComponent} from './admin/trainers/show-train/show-train.component';
import {TrainingtimetableComponent} from './admin/trainingtimetable/trainingtimetable.component';
import{AddEditTttComponent} from './admin/trainingtimetable/add-edit-ttt/add-edit-ttt.component';
import {ShowTttComponent} from './admin/trainingtimetable/show-ttt/show-ttt.component';
import {WorkerComponent} from './admin/worker/worker.component';
import {AddEditWorkComponent} from './admin/worker/add-edit-work/add-edit-work.component';
import {ShowWorkComponent} from './admin/worker/show-work/show-work.component';
import { GoalsuComponent } from './home/goalsu/goalsu.component';
;
import { ShowGoalsuComponent } from './home/goalsu/show-goalsu/show-goalsu.component'
;
import { AddEditGoalsuComponent } from './home/goalsu/add-edit-goalsu/add-edit-goalsu.component' ;
import { InjuriesuComponent } from './home/injuriesu/injuriesu.component' ;
import { AddEditInjuComponent } from './home/injuriesu/add-edit-inju/add-edit-inju.component' ;
import { ShowInjuComponent } from './home/injuriesu/show-inju/show-inju.component' ;
import { InjurylistuComponent } from './home/injurylistu/injurylistu.component'
;
import { ShowInjLUComponent } from './home/injurylistu/show-inj-l-u/show-inj-l-u.component';
import { AddEditInjLuComponent } from './home/injurylistu/add-edit-inj-lu/add-edit-inj-lu.component'
;
import { ManagementworkersuComponent } from './home/managementworkersu/managementworkersu.component'
;
import { ShowMwuComponent } from './home/managementworkersu/show-mwu/show-mwu.component'
;
import { AddEditMwuComponent } from './home/managementworkersu/add-edit-mwu/add-edit-mwu.component'
;
import { MatchesuComponent } from './home/matchesu/matchesu.component'
;
import { AddEditMatchuComponent } from './home/matchesu/add-edit-matchu/add-edit-matchu.component'
;
import { ShowMatchuComponent } from './home/matchesu/show-matchu/show-matchu.component'
;
import { OpponentsuComponent } from './home/opponentsu/opponentsu.component'
;
import { ShowOppuComponent } from './home/opponentsu/show-oppu/show-oppu.component'
;
import { AddEditOppuComponent } from './home/opponentsu/add-edit-oppu/add-edit-oppu.component'
;
import { PlaceuComponent } from './home/placeu/placeu.component'
;
import { ShowPlaceuComponent } from './home/placeu/show-placeu/show-placeu.component'
;
import { AddEditPlaceuComponent } from './home/placeu/add-edit-placeu/add-edit-placeu.component'
;
import { PlayeruComponent } from './home/playeru/playeru.component'
;
import { AddEditPlayuComponent } from './home/playeru/add-edit-playu/add-edit-playu.component'
;
import { ShowPlayuComponent } from './home/playeru/show-playu/show-playu.component'
;
import { SeasonsuComponent } from './home/seasonsu/seasonsu.component'
;
import { AddEditSeasonuComponent } from './home/seasonsu/add-edit-seasonu/add-edit-seasonu.component'
;
import { ShowSeasonuComponent } from './home/seasonsu/show-seasonu/show-seasonu.component'
;
import { SeasontimetableuComponent } from './home/seasontimetableu/seasontimetableu.component'
;
import { AddEditSttuComponent } from './home/seasontimetableu/add-edit-sttu/add-edit-sttu.component'
;
import { ShowSttuComponent } from './home/seasontimetableu/show-sttu/show-sttu.component'
;
import { TeamuComponent } from './home/teamu/teamu.component'
;
import { AddEditTeamuComponent } from './home/teamu/add-edit-teamu/add-edit-teamu.component'
;
import { ShowTeamuComponent } from './home/teamu/show-teamu/show-teamu.component'
;
import { TrainersuComponent } from './home/trainersu/trainersu.component'
;
import { AddEditTrainuComponent } from './home/trainersu/add-edit-trainu/add-edit-trainu.component'
;
import { ShowTrainuComponent } from './home/trainersu/show-trainu/show-trainu.component'
;
import { TrainingtimetableuComponent } from './home/trainingtimetableu/trainingtimetableu.component'
;
import { AddEditTttuComponent } from './home/trainingtimetableu/add-edit-tttu/add-edit-tttu.component'
;
import { ShowTttuComponent } from './home/trainingtimetableu/show-tttu/show-tttu.component'
;
import { WorkeruComponent } from './home/workeru/workeru.component'
;
import { AddEditWorkuComponent } from './home/workeru/add-edit-worku/add-edit-worku.component'
;
import { ShowWorkuComponent } from './home/workeru/show-worku/show-worku.component'
;
import { ViewmatchinfoComponent } from './home/viewmatchinfo/viewmatchinfo.component'
;
import { AddEditViewmatchinfoComponent } from './home/viewmatchinfo/add-edit-viewmatchinfo/add-edit-viewmatchinfo.component'
;
import { ShowViewmatchinfoComponent } from './home/viewmatchinfo/show-viewmatchinfo/show-viewmatchinfo.component';

import { IssuemanwComponent } from './admin/issuemanw/issuemanw.component'
;
import { ShowIssueComponent } from './admin/issuemanw/show-issue/show-issue.component'
;
import { AddEditIssueComponent } from './admin/issuemanw/add-edit-issue/add-edit-issue.component'
;
import { ManagerinfoComponent } from './home/managerinfo/managerinfo.component'
;
import { ShowManinfComponent } from './home/managerinfo/show-maninf/show-maninf.component'
;
import { AddEditManinfComponent } from './home/managerinfo/add-edit-maninf/add-edit-maninf.component'







@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent
,
        ExpensesComponent ,
        ShowExpComponent ,
        AddEditExpComponent ,
        ExpensesuComponent ,
        ShowExpUComponent,
        AddEditExpUComponent,
        ShowGoalsComponent,
        AddEditGoalsComponent,
        GoalsComponent,
        OpponentsComponent
,
        ShowOppComponent ,
        AddEditOppComponent ,
        PlaceComponent ,
        ShowPlaceComponent ,
        AddEditPlaceComponent ,
        PlayerComponent   ,
        AddEditPlayComponent,
        ShowPlayComponent,
        SeasonsComponent,
        AddEditSeasonComponent,
        ShowSeasonComponent,
        SeasontimetableComponent,
        AddEditSttComponent,
        ShowSttComponent,
        TeamComponent,
        ShowTeamComponent,
        AddEditTeamComponent,
        TrainersComponent,
        AddEditTrainComponent,
        ShowTrainComponent,
        TrainingtimetableComponent,
        AddEditTttComponent,
        ShowTttComponent,
        WorkerComponent,
        AddEditWorkComponent,
        ShowWorkComponent
,
        GoalsuComponent
,
        ShowGoalsuComponent
,
        AddEditGoalsuComponent ,
        InjuriesuComponent ,
        AddEditInjuComponent ,
        ShowInjuComponent ,
        InjurylistuComponent,
        ShowInjLUComponent,
        AddEditInjLuComponent
,
        ManagementworkersuComponent
,
        ShowMwuComponent
,
        AddEditMwuComponent
,
        MatchesuComponent,
        AddEditMatchuComponent
,
        ShowMatchuComponent ,
        OpponentsuComponent ,
        ShowOppuComponent ,
        AddEditOppuComponent ,
        PlaceuComponent ,
        ShowPlaceuComponent ,
        AddEditPlaceuComponent
,
        PlayeruComponent
,
        AddEditPlayuComponent
,
        ShowPlayuComponent ,
        SeasonsuComponent ,
        AddEditSeasonuComponent ,
        ShowSeasonuComponent ,
        SeasontimetableuComponent ,
        AddEditSttuComponent ,
        ShowSttuComponent ,
        TeamuComponent ,
        AddEditTeamuComponent
,
        ShowTeamuComponent
,
        TrainersuComponent
,
        AddEditTrainuComponent
,
        ShowTrainuComponent
,
        TrainingtimetableuComponent
,
        AddEditTttuComponent
,
        ShowTttuComponent
,
        WorkeruComponent
,
        AddEditWorkuComponent
,
        ShowWorkuComponent,
        InjuriesComponent,
        AddEditInjComponent,
        ShowInjComponent,
        InjurylistComponent,
        AddEditInjLComponent,
        ShowInjLComponent,
        ManagementworkersComponent,
        AddEditManwComponent,
        ShowManwComponent,
        MatchesComponent,
        AddEditMatchComponent,
        ShowMatchComponent
,
        ViewmatchinfoComponent ,
        AddEditViewmatchinfoComponent ,
        ShowViewmatchinfoComponent
,
        
        IssuemanwComponent ,
        
        ShowIssueComponent ,
        
        AddEditIssueComponent ,
        
        ManagerinfoComponent ,
        
        ShowManinfComponent ,
        
        AddEditManinfComponent  






        

        
        
],



    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
        SharedService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }