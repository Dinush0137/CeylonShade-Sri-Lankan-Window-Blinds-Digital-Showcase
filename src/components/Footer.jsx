export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-dim w-full pt-xxl pb-xl border-t border-outline-variant/20 flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl px-margin-mobile md:px-xxl max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-md">
          <div className="font-display-lg text-headline-sm text-primary">CeylonShade</div>
          <p className="font-body-md text-body-md text-on-surface dark:text-on-surface-variant max-w-xs">
            Curating tropical modern luxury through authentic, handcrafted architectural elements and window treatments.
          </p>
          <div className="flex gap-md mt-sm">
            <a className="hover:opacity-80 transition-opacity" href="#">
              <img alt="Facebook" className="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAofh1FeHP-GsNa8iWegawb2Z2Mcb5BT6vsZG7ID-pHFvP_p5jYBiGCJxV3qNNyf3ExHbtZDJS6iJTw9nJUWUq3RtePtIxnuAkwafj-b-FpUKZvz3sok6GNcAozg3e04Ro2ISOHRf4CSBK7sm3_wa9y_T8H8L7_kSLCiuaoYA9S0817DNglJMGKDnCClPs--K8G7gEC-_Q5BK6SrKOjWpLG9ZQBmbSrtmN1v7xN2-ThyWB9AP8ZxO3dxA" />
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              <img alt="Instagram" className="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCCxNyQqksrSWF-Egh_GRhwrwMpR2bg0q0-g5I0D3ON5CAjjdy0LIwc7TFmt1vS2RJN-0XvZqhWq0Tsn7KL9d_YuG8c3Y6FdU219tsZ1PesjoRTWO5yNWu8-YasCKKxPFq6WKoBHQMeKexQP0-Iaek2DpvqM8cjda_s023jbs8XOZ8o3hn4hUg5LeeYgvM81zfpAHdLXdR40wE_-Nu6USUI-S7W0fxJx0kNUh-nYwE7mjvs7XF5UOJPg" />
            </a>
            <a className="hover:opacity-80 transition-opacity" href="#">
              <img alt="WhatsApp" className="w-6 h-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtM-BPPOSfvk9WLlcSSnDgnziG6IyiP4aTitz3LjOx5HCOmzhZ8C0QWKqV5hbtp8HBqEd8wmXhfPkAQy5jEBgKA2n5GUzsGT0y16vi3KdrqWLYqSADLFv8eYsglFiM8PyfAGFP-wt4b928i1ES8od_CIuY4wjpMEslMHTbwzE5wGDy4xXOVWOXNu4lGu6ayxsbykCEzaoS3rQvHq0PT7K9lOF_1yn0rmt0fHqW6pg1PHwCYY5fnwVtkQ" />
            </a>
          </div>
        </div>
        {/* Links Column 1 */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-xs uppercase tracking-widest">Collections</h4>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Bamboo &amp; Cane</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Roller Blinds</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Zebra Blinds</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Wooden Roman</a>
        </div>
        {/* Links Column 2 */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-xs uppercase tracking-widest">Company</h4>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Our Story</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Sustainability</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Contact Us</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300" href="#">Wholesale</a>
        </div>
        {/* Links Column 3 (JSON Links) */}
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-xs uppercase tracking-widest">Legal</h4>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300 focus:ring-2 focus:ring-primary" href="#">Privacy Policy</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300 focus:ring-2 focus:ring-primary" href="#">Terms of Service</a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary hover:underline transition-all duration-300 focus:ring-2 focus:ring-primary" href="#">Shipping Info</a>
        </div>
      </div>
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-xxl mt-xl pt-lg border-t border-outline-variant/20 flex flex-col md:flex-row items-center gap-md justify-center">
        <p className="font-body-md text-body-md text-on-surface dark:text-on-surface-variant text-sm text-center">
          © 2026 Premiyo Corporation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
