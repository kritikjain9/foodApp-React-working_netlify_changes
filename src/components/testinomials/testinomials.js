import FoodGallery from "./foodImages";
import Testimonials from "./testinomialsData";
import { IKImage } from 'imagekitio-react'; 

function testinomials() {
  return (
    <section class="section-testimonials">
      <div class="testimonials-container">
        <span class="subheading">Testimonials</span>
        <h2 class="heading-secondary">Once you try it, you can't go back</h2>

        <div class="testimonials">
          {Object.keys(Testimonials).map((key) => {
            const customer = Testimonials[key];
            return (
              <figure class="testimonial">
                <img loading="lazy" 
                  class="testimonial-img"
                  alt={"Photo of customer " + customer[2]}
                  src={customer[0]}
                />
                <blockquote class="testimonial-text">{customer[1]}</blockquote>
                <p class="testimonial-name">&mdash; {customer[2]} </p>
              </figure>
            );
          })}
        </div>
      </div>

      <div class="gallery">
        {Object.keys(FoodGallery).map((key) => {
          return (
            <figure class="gallery-item"> 
              <IKImage
              path={FoodGallery[key]} 
              alt= {key}
              loading="lazy"
              lqip={{ active: true }}
              transformation={[
                { quality: 50 },
                { width: 300, devicePixelRatio: '2' },
                { format: 'webp' },
              ]}
              />
            </figure>
          );
        })}
      </div>
    </section>
  );
}
export default testinomials;
