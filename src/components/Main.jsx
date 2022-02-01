import { AboutUs } from "./AboutUs";
import { HowItWorks } from "./HowItWorks";
import { Message } from "./Message";
import { Services } from "./Services";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Message />
        <AboutUs />
        <HowItWorks />
        <Services />
      </div>
    </main>
  );
};
