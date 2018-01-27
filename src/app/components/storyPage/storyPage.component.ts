import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { storyService } from '../../services/story.service';

@Component({
  selector: 'app-story-page',
  templateUrl: './storyPage.component.html',
  styleUrls: [ './storyPage.component.css' ],
  providers: []
})
export class storyPageComponent {
  constructor (private route: ActivatedRoute, private storyService: storyService){
    var par:any = this;
    this.route.params.subscribe( params => par.params = params );
    this.get_story_by_id();
  }
  params:any;
  story:any;
  get_story_by_id() {
    var parent = this;
    this.storyService.get_story_by_id(parent.params.story_id,
      function (story:any){
        parent.story = JSON.parse(story._body);
      }
    );
  }
}
