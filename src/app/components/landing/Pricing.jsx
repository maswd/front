import {Link} from 'react-router-dom'

function Pricing() {
  return (
    <div id="pricing">
      <section className="temp4-pricing">
        <div className="container">
          <div className="justify-content-center forPadding">
            <div className="title-wrapper d-flex justify-content-center mb-5">
              <h3 className="title"> پکیج‌های قیمت گذاری</h3>
            </div>
            <div className="price-options-container row main-row  align-items-end justify-content-center">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                className="package-container-pricing-template-four"
              >
                <div className="row" dir="rtl">
                  <i className="rectangle"> </i>
                </div>
                <div className="row mt-3 mb-2">
                  <span className="package-card-title"> پکیج تک فروشنده</span>
                </div>
                <div className="row mb-4 mt-1">
                  <span className="package-price">۵۴۵۰۰۰</span>
                  <span className="package-price-tag">هزار تومان</span>
                  <span className="package-duration">/ماهانه</span>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره یک
                    </Link>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره دو
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mb-4">
                  <Link  className="card-button-priceing-template-four">
                    ثبت درخواست
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" className="package-container-pricing-template-four">
                <div className="row" dir="rtl">
                  <i className="rectangle"> </i>
                </div>
                <div className="row mt-3 mb-2">
                  <span className="package-card-title"> پکیج دو فروشنده</span>
                </div>
                <div className="row mb-4 mt-1">
                  <span className="package-price">۵۴۵۰۰۰</span>
                  <span className="package-price-tag">هزار تومان</span>
                  <span className="package-duration">/سه ماهه</span>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره یک
                    </Link>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره دو
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mb-4">
                  <Link  className="card-button-priceing-template-four">
                    ثبت درخواست
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="package-container-pricing-template-four">
                <div className="row" dir="rtl">
                  <i className="rectangle"> </i>
                </div>
                <div className="row mt-3 mb-2">
                  <span className="package-card-title"> پکیج سه فروشنده</span>
                </div>
                <div className="row mb-4 mt-1">
                  <span className="package-price">۵۴۵۰۰۰</span>
                  <span className="package-price-tag">هزار تومان</span>
                  <span className="package-duration">/شش ماهه</span>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره یک
                    </Link>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره دو
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mb-4">
                  <Link  className="card-button-priceing-template-four">
                    ثبت درخواست
                  </Link>
                </div>
              </div>
              <div data-aos="fade-up"
     data-aos-anchor-placement="center-center" className="package-container-pricing-template-four">
                <div className="row" dir="rtl">
                  <i className="rectangle"> </i>
                </div>
                <div className="row mt-3 mb-2">
                  <span className="package-card-title"> پکیج چهار فروشنده</span>
                </div>
                <div className="row mb-4 mt-1">
                  <span className="package-price">۵۴۵۰۰۰</span>
                  <span className="package-price-tag">هزار تومان</span>
                  <span className="package-duration">/سالانه</span>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره یک
                    </Link>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="plan-details-wrapper">
                    <Link  className="detail">
                      ویژگی شماره دو
                    </Link>
                  </div>
                </div>
                <div className="row justify-content-center mt-5 mb-4">
                  <Link  className="card-button-priceing-template-four">
                    ثبت درخواست
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
