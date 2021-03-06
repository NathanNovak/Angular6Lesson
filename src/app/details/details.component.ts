import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'; //animation functions imported. See docs for each for mor info


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [
    trigger('listStagger', [
      //'wildcard' state takes place when any type of transition occures from any state to any state
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ], 
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 }))
          , { optional: true })
      ])
    ])
  ]
})
export class DetailsComponent implements OnInit {

  user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => this.user$ = params.id)
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }
}
