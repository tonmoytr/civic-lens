export default function AdvertiseSection() {
  return (
    <section className="advertise">
      <div className="w-layout-blockcontainer container w-container">
        <div className="advertise-wrap">
          <img
            alt=""
            className="advertise-image"
            loading="lazy"
            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1336px) 97vw, 1296px"
            src="/assets/images/home/ads.jpg"
          />

          <div className="advertise-data">
            <div className="advertise-info">
              <h3 className="advertise-title">
                Turning ideas into impactful Ad campaigns
              </h3>
              <p className="advertise-text">
                Partner with us to take your brand to the next level. Our
                platform offers prime advertising opportunities designed to
                connect your business with a diverse &amp; engaged audience.
              </p>
            </div>
            <a
              href="/advertise"
              className="primary-button w-inline-block"
              data-w-id="41765fd1-f871-f6b7-7c92-0d9eee09b465"
            >
              <div>Advertise With us</div>
              {/* <img
                className="arrow"
                loading="lazy"
                alt="Arrow"
                src="https://cdn.prod.website-files.com/67372e014977be3ffcac2486/679325bd8b8c42f40706a8af_dd55803183fe032b44b49869d93eba77_ic-arrow.svg"
              /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
