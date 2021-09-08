import { get} from './http'



export function getUsers(){
    return get('https://api.github.com/repos/angular/angular/contributors?&per_page=100');
  }

export function getRepos(username){
    return get(`https://api.github.com/users/${username}`);
  }

export function getRepoLists(username){
    return get(`https://api.github.com/users/${username}/repos?&per_page=100`);
  }