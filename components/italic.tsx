export const Italic = (props: { children: string }) => {
  console.log("This should not be here.");
  return <i>{props.children}</i>;
};
