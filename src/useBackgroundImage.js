import { useEffect, useState } from "react";
import autumn from "../src/assets/images/todoautumn.jpg"
import spring from "../src/assets/images/todospring.jpg"
import summer from "../src/assets/images/todosummer.jpg"
import winter from "../src/assets/images/todowinter.jpg"

const useBackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const month = new Date().getMonth();
    if (month >= 3 && month < 6) {
      setBackgroundImage(spring);
    } else if (month >= 6 && month < 9) {
      setBackgroundImage(summer);
    } else if (month >= 9 && month < 12) {
      setBackgroundImage(autumn);
    } else {
      setBackgroundImage(winter);
    }
  }, []);

  return backgroundImage;
};

export default useBackgroundImage;