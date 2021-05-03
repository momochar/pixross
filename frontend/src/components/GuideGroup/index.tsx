function GuideGroup(props: { guide: number[] }) {
  const guideElement = props.guide.map((g) => <div>{g}</div>);
  return <div>{guideElement}</div>;
}

export default GuideGroup;
