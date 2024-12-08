function Footer({ items }) {
  if (!items.length) {
    return (
      <footer>
        <em>Starting adding items to your pack list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length || 0;
  const packedItems = items.filter((item) => item.packed).length;

  const packedPercentage = numItems
    ? Math.round((packedItems / numItems) * 100)
    : 0;
  console.log(`packed ${packedPercentage}%`);
  return (
    <footer className="footer">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${numItems} item on your list, and you have already packed 
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
export default Footer;
