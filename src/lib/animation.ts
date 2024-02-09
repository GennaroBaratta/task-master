import gsap from 'gsap'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import type { Mesh, BufferGeometry, NormalBufferAttributes, Material, Object3DEventMap } from 'three';

export const animatePageIn = (href: string, router: AppRouterInstance) => {
  const t = animatePageOut(href, router);
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement && t) {
    //const tl = gsap.timeline();

    t.set(transitionElement, {
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 0.8,
      })
      .to(
        transitionElement,
        {
          borderTopLeftRadius: "50vh",
          borderBottomLeftRadius: "50vh",
          duration: 0.4,
        },
        "<"
      );
  }
};

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    return tl.set(animationWrapper, {
      xPercent: -100,
      borderTopRightRadius: "50vh",
      borderBottomRightRadius: "50vh",
      borderTopLeftRadius: "0",
      borderBottomLeftRadius: "0",
    })
      .to(animationWrapper, {
        xPercent: 0,
        duration: 0.8,
        onComplete: () => {
          router.push(href);
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.4,
        },
        "<"
      );
  }
};

export const spin = (mesh: Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>, delta: number) => {

  gsap.to(mesh.rotation, { y: mesh.rotation.y + (Math.PI / 2) * delta, duration: 1 });

};
