import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockDataService {
    
    private projectsUrl = "assets/portfolio/mock-data/projects.json";
    private experiencesUrl = "assets/portfolio/mock-data/experiences.json";

    constructor(private httpClient: HttpClient) {}

    public getProjects() {
        return this.httpClient.get(this.projectsUrl, { responseType: 'text' })
    }

    public getExperiences() {
        return this.httpClient.get(this.experiencesUrl, { responseType: 'text' })
    }
}