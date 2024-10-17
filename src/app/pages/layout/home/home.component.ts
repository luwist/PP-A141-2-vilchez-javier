import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserGithub } from '@app/interfaces';
import { GithubRepository } from '@app/repositories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userGithub$!: Observable<UserGithub>;

  constructor(_githubRepository: GithubRepository) {
    this.userGithub$ = _githubRepository.getUserByUsername('luwist');
  }
}
