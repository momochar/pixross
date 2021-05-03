import Guide from "../Guide";

function GuideGroup(props: { guides: number[] }) {
  const guideElement = props.guides.map((g) => <Guide guide={g}></Guide>);
  return <div>{guideElement}</div>;
}

export default GuideGroup;
