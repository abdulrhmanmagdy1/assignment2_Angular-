import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamContentComponent } from './team-content/team-content';

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image: string;
}

@Component({
  selector: 'app-team',
  imports: [CommonModule, TeamContentComponent],
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class Team {
  showContent: boolean = true;

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Head Chef',
      bio: 'Experienced chef with 15 years in the culinary industry.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Sous Chef',
      bio: 'Creative culinary artist specializing in modern cuisine.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'Pastry Chef',
      bio: 'Expert in desserts and baked goods with French training.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    }
  ];

  onHideContent(): void {
    this.showContent = false;
  }

  showContentAgain(): void {
    this.showContent = true;
  }
}
