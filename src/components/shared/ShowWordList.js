import { Table } from "flowbite-react";
import React from "react";

const ShowWordList = () => {
  return (
    <div>
      <Table hoverable={true} className="container mx-auto">
        <Table.Head>
          <Table.HeadCell>Hanzi</Table.HeadCell>
          <Table.HeadCell>Pinyin</Table.HeadCell>
          <Table.HeadCell>English</Table.HeadCell>
          <Table.HeadCell>Bangla</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800      whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <Table.Cell>书</Table.Cell>
            <Table.Cell>shu</Table.Cell>
            <Table.Cell>Book</Table.Cell>
            <Table.Cell>বই</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default ShowWordList;
