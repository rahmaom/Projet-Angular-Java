import { Component, OnInit, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { ModalService } from 'src/app/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ModalComponent implements OnInit {

  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
      this.element = el.nativeElement;
  }

  ngOnInit(): void {
      // if (!this.id) {
      //     console.error('modal must have an id');
      //     return;
      // }

      // document.body.appendChild(this.element);

      // this.element.addEventListener('click', el => {
      //     if (el.target.className === 'jw-modal') {
      //         this.close();
      //     }
      // });

      // this.modalService.add(this);
  }



  // open modal
  open(): void {
      this.element.style.display = 'block';
      document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
      this.element.style.display = 'none';
      document.body.classList.remove('jw-modal-open');
  }
}