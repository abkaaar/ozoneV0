"use client"

import Link from "next/link";
import Image from "next/image";

const WhatsappLink = () => {
  const visible = true;
  

  return (
    <Link href="https://wa.me/+2349084000008" >
    
     <Image alt="whatsapp number" src={'/assets/icons/whatsapp.png'} width={50} height={50}
      className={`fixed bottom-20 right-5 shadow-lg rounded-full ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
    </Image>
    </Link>
   
    
  );
};

export default WhatsappLink;
