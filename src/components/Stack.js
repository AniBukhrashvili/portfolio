import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import antdesign from "../assets/stack/antdesign.svg";
import azuredevops from "../assets/stack/azuredevops.svg";
import bootstrap from "../assets/stack/bootstrap.svg";
import cypress from "../assets/stack/cypress.svg";
import express from "../assets/stack/express.svg";
import figma from "../assets/stack/figma.svg";
import git from "../assets/stack/git.svg";
import github from "../assets/stack/github.svg";
import gitlab from "../assets/stack/gitlab.svg";
import html5 from "../assets/stack/html5.svg";
import javascript from "../assets/stack/javascript.svg";
import jira from "../assets/stack/jira.svg";
import jquery from "../assets/stack/jquery.svg";
import materialui from "../assets/stack/materialui.svg";
import nextjs from "../assets/stack/nextjs.svg";
import nodejs from "../assets/stack/nodejs.svg";
import postman from "../assets/stack/postman.svg";
import photoshop from "../assets/stack/photoshop.svg";
import react from "../assets/stack/react.svg";
import redux from "../assets/stack/redux.svg";
import sass from "../assets/stack/sass.svg";
import sourcetree from "../assets/stack/sourcetree.svg";
import swagger from "../assets/stack/swagger.svg";
import tailwind from "../assets/stack/tailwind.svg";
import trello from "../assets/stack/trello.svg";
import typescript from "../assets/stack/typescript.svg";
import wordpress from "../assets/stack/wordpress.svg";
import css from "../assets/stack/css.svg";
import jest from "../assets/stack/jest.svg";
import vite from "../assets/stack/vite.svg";
import gsapIcon from "../assets/stack/gsap.svg";
import tanstack from "../assets/stack/tanstack.svg";
import sentry from "../assets/stack/sentry.svg";
import npm from "../assets/stack/npm.svg";
import pixijs from "../assets/stack/pixijs.svg";
import eslint from "../assets/stack/eslint.svg";
import reactrouter from "../assets/stack/reactrouter.svg";

const groups = ["All", "Frontend", "Backend", "Tools", "Design"];

const stack = [
  { name: "HTML5", icon: html5, group: "Frontend" },
  { name: "CSS3", icon: css, group: "Frontend" },
  { name: "Sass", icon: sass, group: "Frontend" },
  { name: "JavaScript", icon: javascript, group: "Frontend" },
  { name: "TypeScript", icon: typescript, group: "Frontend" },
  { name: "React", icon: react, group: "Frontend" },
  { name: "Next.js", icon: nextjs, group: "Frontend" },
  { name: "React Router", icon: reactrouter, group: "Frontend" },
  { name: "PixiJS", icon: pixijs, group: "Frontend" },
  { name: "jQuery", icon: jquery, group: "Frontend" },
  { name: "Tailwind", icon: tailwind, group: "Frontend" },
  { name: "Bootstrap", icon: bootstrap, group: "Frontend" },
  { name: "Material UI", icon: materialui, group: "Frontend" },
  { name: "Ant Design", icon: antdesign, group: "Frontend" },
  { name: "Redux", icon: redux, group: "Frontend" },
  { name: "TanStack Query", icon: tanstack, group: "Frontend" },
  { name: "GSAP", icon: gsapIcon, group: "Frontend" },
  { name: "WordPress", icon: wordpress, group: "Backend" },
  { name: "Node.js", icon: nodejs, group: "Backend" },
  { name: "Express", icon: express, group: "Backend" },
  { name: "Git", icon: git, group: "Tools" },
  { name: "GitHub", icon: github, group: "Tools" },
  { name: "GitLab", icon: gitlab, group: "Tools" },
  { name: "Sourcetree", icon: sourcetree, group: "Tools" },
  { name: "npm", icon: npm, group: "Tools" },
  { name: "Vite", icon: vite, group: "Tools" },
  { name: "ESLint", icon: eslint, group: "Tools" },
  { name: "Jest", icon: jest, group: "Tools" },
  { name: "Cypress", icon: cypress, group: "Tools" },
  { name: "Postman", icon: postman, group: "Tools" },
  { name: "Swagger", icon: swagger, group: "Tools" },
  { name: "Sentry", icon: sentry, group: "Tools" },
  { name: "Jira", icon: jira, group: "Tools" },
  { name: "Trello", icon: trello, group: "Tools" },
  { name: "Azure DevOps", icon: azuredevops, group: "Tools" },
  { name: "Figma", icon: figma, group: "Design" },
  { name: "Photoshop", icon: photoshop, group: "Design" },
];

function Stack() {
  const [group, setGroup] = useState("Frontend");
  const listRef = useRef(null);
  const heightRef = useRef(0);
  const firstRender = useRef(true);
  const visible =
    group === "All" ? stack : stack.filter((item) => item.group === group);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    if (firstRender.current) {
      firstRender.current = false;
      heightRef.current = list.offsetHeight;
      return undefined;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      heightRef.current = list.offsetHeight;
      return undefined;
    }

    const fromHeight = heightRef.current || list.offsetHeight;
    const toHeight = list.offsetHeight;
    const items = list.querySelectorAll("li");

    const tween = gsap.timeline({
      onComplete: () => {
        heightRef.current = list.offsetHeight;
      },
    });

    if (fromHeight !== toHeight) {
      tween.fromTo(
        list,
        { height: fromHeight, overflow: "hidden" },
        {
          height: toHeight,
          duration: 0.4,
          ease: "power2.inOut",
          clearProps: "height,overflow",
        },
        0
      );
    }

    tween.fromTo(
      items,
      { autoAlpha: 0, y: 12, scale: 0.94 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        stagger: { amount: 0.28 },
        ease: "power2.out",
        clearProps: "transform,opacity,visibility",
      },
      0
    );

    return () => tween.kill();
  }, [group]);

  const selectGroup = (item) => {
    if (item === group) return;
    if (listRef.current) heightRef.current = listRef.current.offsetHeight;
    setGroup(item);
  };

  return (
    <section id="stack" className="relative">
      <div className="container py-12 xl:py-18">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-xl font-light tracking-medium text-ink">
            Stack
            <span className="ml-1 text-sm font-light italic text-ink/50">
              I work with
            </span>
          </h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {groups.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => selectGroup(item)}
                aria-pressed={group === item}
                className={`text-sm font-medium  ${
                  group === item
                    ? "text-accent border-b border-accent"
                    : "text-ink/45 hover:text-ink"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <ul
          ref={listRef}
          className="mt-4 flex flex-wrap content-start gap-4 rounded-2xl border border-ink/10 p-5 min-h-[240px]"
        >
          {visible.map((item) => (
            <li
              key={item.name}
              className="flex w-16 flex-col items-center gap-2 text-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-xl border border-ink/10 bg-[var(--stack-tile)] p-2">
                <img
                  src={item.icon}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-xs font-medium text-ink/70">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Stack;
