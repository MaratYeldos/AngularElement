import { Component, OnInit } from '@angular/core';
import {Testimonial} from "../../../models/testimonial.model";
import {TestimonialService} from "../../../service/testimonial.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  testimonials: Testimonial[] | any = [];
  constructor(private testimonialService: TestimonialService) { }
  ngOnInit(): void {
    this.testimonials = this.testimonialService.getTestimonials();

  }

}
