import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import ShowWordList from "../shared/ShowWordList";

const AddWord = () => {
  const [hanzi, setHanzi] = useState("");
  const [pinyin, setPinyin] = useState("");
  const [english, setEnglish] = useState("");
  const [bangla, setBangla] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const word = { hanzi, pinyin, english, bangla };
    console.log(word);
  };
  return (
    <>
      <div className=" w-1/2 mx-auto">
        <h1 className=" text-2xl text-center">Add Word</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="hanzi" value="Input Hanzi" />
            </div>
            <TextInput
              id="hanzi"
              type="text"
              placeholder="Input Chinese Character"
              required={false}
              onChange={(e) => setHanzi(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="pinyin" value="Input Pinyin" />
            </div>
            <TextInput
              id="pinyin"
              type="text"
              placeholder="Input Chinese Pinyin"
              required={false}
              onChange={(e) => setPinyin(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="english" value="Input English Meaning" />
            </div>
            <TextInput
              id="english"
              type="text"
              placeholder="Input English Meaning"
              required={false}
              onChange={(e) => setEnglish(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bangla" value="Bangla Meaning" />
            </div>
            <TextInput
              id="bangla"
              type="text"
              placeholder="Input Bangla Meaning"
              required={false}
              onChange={(e) => setBangla(e.target.value)}
            />
          </div>
          {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <ShowWordList />
    </>
  );
};

export default AddWord;
