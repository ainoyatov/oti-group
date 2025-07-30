import { BLOCKS } from "@contentful/rich-text-types";

export const richTextRenderOptions = {
  renderNode: {
    [BLOCKS.TABLE]: (node: any, children: React.ReactNode) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300">
          <tbody>{children} </tbody>
        </table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node: any, children: React.ReactNode) => (
      <tr className="border-b border-gray-400"> {children} </tr>
    ),
    [BLOCKS.TABLE_CELL]: (node: any, children: React.ReactNode) => (
      <td className="border border-gray-400 px-4 py-2 text-left">
        {" "}
        {children}{" "}
      </td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node: any, children: React.ReactNode) => (
      <th className="border border-gray-400 px-4 py-2 text-left font-semibold bg-gray-50">
        {children}
      </th>
    ),

    [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 leading-tight">
        {" "}
        {children}{" "}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mt-7 mb-3 leading-tight">
        {" "}
        {children}{" "}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
      <h3 className="text-xl font-semibold mt-6 mb-3 leading-tight">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
      <h4 className="text-lg font-semibold mt-5 mb-2 leading-tight">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
      <h5 className="text-base font-semibold mt-4 mb-2 leading-tight">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
      <h6 className="text-sm font-semibold mt-4 mb-2 leading-tight uppercase tracking-wide">
        {children}
      </h6>
    ),

    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <p className="leading-relaxed mb-4"> {children} </p>
    ),

    [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
      <ul className="list-disc ml-6 space-y-2 mb-4"> {children} </ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
      <ol className="list-decimal ml-6 space-y-2 mb-4"> {children} </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
      <li className="leading-relaxed"> {children} </li>
    ),

    [BLOCKS.HR]: () => <hr className="border-gray-400 my-8" />,
  },
};
