import data from "../content/data.json";
import Section from "../ui/section";
import Heading from "./heading";
import Card from "./workspace-card";
const ListWorkspace = () => {
  const workspace = data;
  return (
    <Section>
      <div className="pt-12 pb-12">
        <Heading text="Our Space Overview" level="h1" />

        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {workspace
              .filter((data) => data.is_active)
              .map((data, index) => (
                <Card data={data} index={index} />
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ListWorkspace;
