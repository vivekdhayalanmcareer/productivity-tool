import { IconX } from "@tabler/icons-react";

const InformationBanner = () => {
  return (
    <div className="info-banner">
      <p className="info-banner-message">
        An important message can be shown in information banner. Its closable.
        <IconX size={16} />
      </p>
    </div>
  );
};

export default InformationBanner;
