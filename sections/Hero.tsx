import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
interface Props {
  /**
   * @description Hero image
   */
  image?: ImageWidget;
  /**
   * @description Alternative text for the image
   */
  alt?: string;
}
export default function ImageHero({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/6fe9404a-f69c-472a-b521-78f6c1f87326",
  alt = "Hero Image"
}: Props) {
  return (
    <div class="w-full">
      <Image
        class="w-full h-[calc(100vh-80px)] object-cover"
        sizes="100vw"
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        decoding="async"
        loading="lazy"
      />
    </div>
  );
}
