import { Injectable } from '@angular/core';
import {Testimonial} from "../models/testimonial.model";

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonials: Testimonial[] = [
    new Testimonial(
      'Incredible Experience',
      'We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.',
      'assets/img/testimonials-client.png',
      'Anya Tailor Joy',
      'CEO, SF Industires'
    ),
    new Testimonial(
      'Dependable, Responsive, Professional Partner',
      'Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. ',
      'assets/img/testimonials-client.png',
      'Anya Tailor Joy',
      'CEO, SF Industires'
    ),
  ];
  constructor() { }

  getTestimonials() {
    return this.testimonials.slice();
  }
}
