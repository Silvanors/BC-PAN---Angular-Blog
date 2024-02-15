import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  contentPhotoCover: string ="";
  @Input()
  contentTitle: string = "";
  @Input()
  contentDescription: string = "Olá mundo!!!";

  private id: string | null ="0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      //console.log(value.get("id"))
      this.id=value.get("id")
    )
    this.setValuesToComponent(this.id)
  }



  setValuesToComponent(id:string | null){
    const result = dataFake.filter(parametro => parametro.id === id)[0]

    //console.log(result.id)
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.contentPhotoCover = result.photoCover
  }

}
