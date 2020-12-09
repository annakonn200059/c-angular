import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="http://localhost:52872/api";

  constructor(private http:HttpClient) { }

//expenses
  getExpensesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/expenses');
  }

  addExpenses(val:any){
    return this.http.post(this.APIUrl+'/expenses', val);
  }

  updateExpenses(val:any){
    return this.http.put(this.APIUrl+'/expenses', val);
  }

  deleteExpenses(val:any){
    return this.http.delete(this.APIUrl+'/expenses/'+val);
  }

  getAllTeamNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/expenses/GetAllTeamNames');
  }

  getAllSeasonNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/expenses/GetAllSeasonNames');
  }

  //goals

  getGoalsList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/goals');
  }

  addGoals(val:any){
    return this.http.post(this.APIUrl+'/goals', val);
  }

  updateGoals(val:any){
    return this.http.put(this.APIUrl+'/goals', val);
  }

  /*deleteGoals(val:any){
    return this.http.delete(this.APIUrl+'/goals/'+val);
  }*/

  getAllPlayers():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/goals/GetAllPlayers');
  }

  getAllMatchesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/goals/GetAllMatchesNames');
  }

  //injuries

  getInjuriesList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/injuries');
  }

  addInjuries(val:any){
    return this.http.post(this.APIUrl+'/injuries', val);
  }

  updateInjuries(val:any){
    return this.http.put(this.APIUrl+'/injuries', val);
  }

  deleteInjuries(val:any){
    return this.http.delete(this.APIUrl+'/injuries/'+val);
  }

  //injuryList

  getInjuryList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/injuryList');
  }

  addInjuryList(val:any){
    return this.http.post(this.APIUrl+'/injuryList', val);
  }

  updateInjuryList(val:any){
    return this.http.put(this.APIUrl+'/injuryList', val);
  }

  /*deleteInjuryList(val:any){
    return this.http.delete(this.APIUrl+'/injuryList/'+val);
  }*/

  getAllInjuriesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/injuryList/GetAllInjuriesNames');
  }

  getAllPlayersID():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/injuryList/GetAllPlayersID');
  }

  //managementWorkers

  getManagementWorkers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/managementWorkers');
  }

  addManagementWorkers(val:any){
    return this.http.post(this.APIUrl+'/managementWorkers', val);
  }

  updateManagementWorkers(val:any){
    return this.http.put(this.APIUrl+'/managementWorkers', val);
  }

  deleteManagementWorkers(val:any){
    return this.http.delete(this.APIUrl+'/managementWorkers'+val);
  }

  getAllmwNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/managementWorkers/GetAllmwNames');
  }

//matches

getMatches():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/matches');
}

addMatches(val:any){
  return this.http.post(this.APIUrl+'/matches', val);
}

updateMatches(val:any){
  return this.http.put(this.APIUrl+'/matches', val);
}

/*deleteMatches(val:any){
  return this.http.delete(this.APIUrl+'/matches/'+val);
}*/

getAllTeamNamesMatch():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/matches/GetAllTeamNames');
}

getAllOpponentsNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/matches/GetAllOpponentsNames');
}

//opponents

getOpponents():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/opponents');
}

addOpponents(val:any){
  return this.http.post(this.APIUrl+'/opponents', val);
}

updateOpponents(val:any){
  return this.http.put(this.APIUrl+'/opponents', val);
}
/*deleteOpponents(val:any){
  return this.http.delete(this.APIUrl+'/opponents/'+val);
}*/

//place

getPlace():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/place');
}

addPlace(val:any){
  return this.http.post(this.APIUrl+'/place', val);
}

updatePlace(val:any){
  return this.http.put(this.APIUrl+'/place', val);
}

/*deletePlace(val:any){
  return this.http.delete(this.APIUrl+'/place/'+val);
}*/

//player

getPlayer():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/player');
}

addPlayer(val:any){
  return this.http.post(this.APIUrl+'/player', val);
}

updatePlayer(val:any){
  return this.http.put(this.APIUrl+'/player', val);
}

/*deletePlayer(val:any){
  return this.http.delete(this.APIUrl+'/player/'+val);
}*/

getAllPlayerNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/player/GetAllPlayerNames');
}

getAllTeamNamesPlayer():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/player/GetAllTeamNames');
}

//seasons

getSeasons():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/season');
}

addSeasons(val:any){
  return this.http.post(this.APIUrl+'/season', val);
}

updateSeasons(val:any){
  return this.http.put(this.APIUrl+'/season', val);
}

/*deleteSeasons(val:any){
  return this.http.delete(this.APIUrl+'/seasons/'+val);
}*/

//seasonTimeTable

getSeasonTimeTable():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/seasonTimeTable');
}

addSeasonTimeTable(val:any){
  return this.http.post(this.APIUrl+'/seasonTimeTable', val);
}

updateSeasonTimeTable(val:any){
  return this.http.put(this.APIUrl+'/seasonTimeTable', val);
}

deleteSeasonTimeTable(val:any){
  return this.http.delete(this.APIUrl+'/seasonTimeTable/'+val);
}

getAllMatchesID():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/seasonTimeTable/GetAllMatchesID');
}

getAllSeasonNamesTable():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/seasonTimeTable/GetAllSeasonNames');
}

//team

getTeam():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/team');
}

addTeam(val:any){
  return this.http.post(this.APIUrl+'/team',val);
}

updateTeam(val:any){
  return this.http.put(this.APIUrl+'/team',val);
}

GetPlayers(val:any){
  return this.http.get(this.APIUrl+'/team/GetPlayers/'+val);
}

GetTrainers(val:any){
  return this.http.get(this.APIUrl+'/team/GetTrainers/'+val);
}


/*deleteTeam(val:any){
  return this.http.delete(this.APIUrl+'/team/'+val);
}*/


//trainers

getTrainers():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/trainers');
}

addTrainers(val:any){
  return this.http.post(this.APIUrl+'/trainers', val);
}

updateTrainers(val:any){
  return this.http.put(this.APIUrl+'/trainers', val);
}

deleteTrainers(val:any){
  return this.http.delete(this.APIUrl+'/trainers/'+val);
}

getAllTrainersNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/trainers/GetAllTrainersNames');
}

getAllTeamNamesTrainers():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/trainers/GetAllTeamNames');
}

//trainingTimeTable

getTrainingTimeTable():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/trainingTimeTable');
}

addTrainingTimeTable(val:any){
  return this.http.post(this.APIUrl+'/trainingTimeTable', val);
}

updateTrainingTimeTable(val:any){
  return this.http.put(this.APIUrl+'/trainingTimeTable', val);
}

deleteTrainingTimeTable(val:any){
  return this.http.delete(this.APIUrl+'/trainingTimeTable/'+val);
}

getAllTeamNamesTT():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/trainingTimeTable/GetAllTeamNames');
}

getAllPlaceNames():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/trainingTimeTable/GetAllPlaceNames');
}

//worker

getWorker():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/worker');
}

addWorker(val:any){
  return this.http.post(this.APIUrl+'/worker', val);
}

updateWorker(val:any){
  return this.http.put(this.APIUrl+'/worker', val);
}

/*deleteWorker(val:any){
  return this.http.delete(this.APIUrl+'/worker/'+val);
}*/

//issueManW
getIssueManW():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/issueManW');
}

addIssueManW(val:any){
  return this.http.post(this.APIUrl+'/issueManW', val);
}

updateIssueManW(val:any){
  return this.http.put(this.APIUrl+'/issueManW', val);
}

deleteIssueManW(val:any){
  return this.http.delete(this.APIUrl+'/issueManW/'+val);
}

getAllManagers():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl+'/issueManW/GetAllManagementWorkers');
}



//views for user

//matchInfo
getMatchInfo():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/matchInfo');
}


//managerInfo

getManagerInfo():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/managerInfo');
}

addManagerInfo(val:any){
  return this.http.post(this.APIUrl+'/managerInfo', val);
}


}
