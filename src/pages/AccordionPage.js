import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id:'lksdii',
      label: "Can I use react",
      content: "yes you can"
    },
    { id:'lkgjla',
      label: "Can I use react",
      content: "yes you can"
    },
    { id:'lksdng',
      label: "Can I use react",
      content: "yes you can"
    },
  ]
  return <Accordion items={items} />
}

export default AccordionPage;