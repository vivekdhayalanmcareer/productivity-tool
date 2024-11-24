import Main from "pages";
import "styles/styles.scss";
import InformationBanner from "shared/information-banner";
import NavigationMenu from "shared/navigation-menu";
import Header from "shared/header";
import FullscreenBanner from "shared/full-screen-banner";
import StoreProvider from "store-provider";

export default function Home() {
  return (
    <StoreProvider>
      <>
        <InformationBanner />
        <Header />
        <NavigationMenu />
        <Main />
        <FullscreenBanner />
      </>
    </StoreProvider>
  );
}
