import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as bodyParser from "body-parser";
import {
  AsyncSubject,
  BehaviorSubject,
  concat,
  from,
  fromEvent,
  interval,
  merge,
  noop,
  Observable,
  of,
  ReplaySubject,
  Subject,
  timer,
} from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { map } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  constructor() {}

  // ngOnInit() {
  //   const subject = new ReplaySubject();

  //   const series$ = subject.asObservable();

  //   series$.subscribe((val) => console.log("first sub: " + val));

  //   subject.next(1);
  //   subject.next(2);
  //   subject.next(3);
  //   // subject.complete();

  //   setTimeout(() => {
  //     series$.subscribe((val) => console.log("second sub: " + val));
  //     subject.next(4);
  //   }, 3000);
  // }
}

// subject é ao mesmo tempo um observable e um observer

// asObservable transformou o subject em apenas um observable, para que as outras partes da aplicação possam apenas dar um subscribe, emitindo as funcoes de observer

// Só se deve criar um observable a partir de um subject caso os metodos que o rxjs oferece nao sejam viáveis (from ou fromPromise)

// AsyncSubject é util quando queremos receber apenas o ultimo valor emitido pelo observable

// ReplaySubject para receber todos os valores emitidos, inclusive os subscribers atrasados, e não precisamos esperar pelo subject ser completado
