// Import the Cloudinary classes. 
import {fill} from "@cloudinary/url-gen/actions/resize";
import {CloudinaryImage} from '@cloudinary/url-gen';

const CloudinaryImage = () => {
  const myLogo = new CloudinaryLogo
  ('sample', {cloudName: 'VintedLogo'})
    .resize(fill()
    .width(100)
    .height(150)
    );
  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myLogo} />
    </div>
    );

}

export default CloudinaryImage ;

