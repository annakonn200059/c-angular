import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import{ExpensesComponent} from 'src/app/admin/expenses/expenses.component'
import {ExpensesuComponent} from 'src/app/home/expensesu/expensesu.component'
import {GoalsComponent} from 'src/app/admin/goals/goals.component'
import {InjuriesComponent} from 'src/app/admin/injuries/injuries.component';
import { InjurylistComponent } from 'src/app/admin/injurylist/injurylist.component';
import {ManagementworkersComponent} from 'src/app/admin/managementworkers/managementworkers.component';
import { MatchesComponent } from './admin/matches/matches.component';
import { OpponentsComponent } from './admin/opponents/opponents.component';
import { PlaceComponent } from './admin/place/place.component';
import { PlayerComponent } from './admin/player/player.component';
import { SeasonsComponent } from './admin/seasons/seasons.component';
import { SeasontimetableComponent } from './admin/seasontimetable/seasontimetable.component';
import { TeamComponent } from './admin/team/team.component';
import { TrainersComponent } from './admin/trainers/trainers.component';
import { TrainingtimetableComponent } from './admin/trainingtimetable/trainingtimetable.component';
import { WorkerComponent } from './admin/worker/worker.component';
import { GoalsuComponent } from './home/goalsu/goalsu.component';
import { InjuriesuComponent } from './home/injuriesu/injuriesu.component';
import { InjurylistuComponent } from './home/injurylistu/injurylistu.component';
import { ManagementworkersuComponent } from './home/managementworkersu/managementworkersu.component';
import { MatchesuComponent } from './home/matchesu/matchesu.component';
import { OpponentsuComponent } from './home/opponentsu/opponentsu.component';
import { PlaceuComponent } from './home/placeu/placeu.component';
import { PlayeruComponent } from './home/playeru/playeru.component';
import { SeasonsuComponent } from './home/seasonsu/seasonsu.component';
import { SeasontimetableuComponent } from './home/seasontimetableu/seasontimetableu.component';
import { TeamuComponent } from './home/teamu/teamu.component';
import { TrainersuComponent } from './home/trainersu/trainersu.component';
import { TrainingtimetableuComponent } from './home/trainingtimetableu/trainingtimetableu.component';
import { WorkeruComponent } from './home/workeru/workeru.component';
import { ViewmatchinfoComponent } from './home/viewmatchinfo/viewmatchinfo.component';
import { IssuemanwComponent } from './admin/issuemanw/issuemanw.component';
import { ManagerinfoComponent } from './home/managerinfo/managerinfo.component';







const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
           /* { path: 'expensesu', component: ExpensesuComponent },*/
            {path: 'goalsu', component: GoalsuComponent},
            /*{path:'injuriesu', component:InjuriesuComponent},*/
           /* {path:'injuryListu', component: InjurylistuComponent},*/
            {path:'managementWorkersu',component:ManagementworkersuComponent},
            {path:'matchesu',component: MatchesuComponent},
            {path:'opponentsu', component:OpponentsuComponent},
            {path:'placeu', component:PlaceuComponent},
            {path:'playeru',component:PlayeruComponent},
            {path:'seasonsu', component:SeasonsuComponent},
            {path:'seasonTimeTableu', component:SeasontimetableuComponent},
            {path:'teamu', component:TeamuComponent},
            {path:'trainersu', component:TrainersuComponent},
            {path:'trainingTimeTableu', component:TrainingtimetableuComponent},
            {path:'workeru', component:WorkeruComponent},
            { path: 'matchInfo', component: ViewmatchinfoComponent },
            {path:'managerInfo', component:ManagerinfoComponent}
          
          ] 
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] },
        children: [
            { path: 'expenses', component: ExpensesComponent},
            {path: 'goals', component: GoalsComponent},
            {path:'injuries', component:InjuriesComponent},
            {path:'injuryList', component: InjurylistComponent},
            {path:'managementWorkers',component:ManagementworkersComponent},
            {path:'matches',component: MatchesComponent},
            {path:'opponents', component:OpponentsComponent},
            {path:'place', component:PlaceComponent},
            {path:'player',component:PlayerComponent},
            {path:'seasons', component:SeasonsComponent},
            {path:'seasonTimeTable', component:SeasontimetableComponent},
            {path:'team', component:TeamComponent},
            {path:'trainers', component:TrainersComponent},
            {path:'trainingTimeTable', component:TrainingtimetableComponent},
            {path:'worker', component:WorkerComponent},
            {path:'issueManW', component:IssuemanwComponent}

          
          ] 
    },
    {
        path: 'login',
        component: LoginComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];


export const appRoutingModule = RouterModule.forRoot(routes);