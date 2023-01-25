const SummaryItem = ({
  itemName,
  itemValue,
}: {
  itemName: string;
  itemValue: number;
}) => {
  return (
    <article className="bg-green-50 rounded-sm flex justify-between p-2 gap-12">
      <h3 className="font-bold">{itemName}</h3>
      <span className="bg-green-900 text-white px-2 rounded-sm font-mono">
        {itemValue}
      </span>
    </article>
  );
};

export default SummaryItem;
