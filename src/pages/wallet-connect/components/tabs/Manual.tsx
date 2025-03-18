"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { ethers } from "ethers";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IManualConnectionForm {
  address: string;
}

const schema = yup
  .object({
    address: yup
      .string()
      .test("is-valid-address", "Invalid Ethereum address", (value) =>
        ethers.utils.isAddress(value || "")
      )
      .required(),
  })
  .required();

/**
 * A tab component that allows users to manually enter a WalletConnect connection URL
 * to establish a connection with their wallet
 * @returns {React.ReactNode} A form with an input field for entering the WalletConnect URL
 */
const ManualConnectionTab = () => {
  const { register } = useForm<IManualConnectionForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      address: "",
    },
  });
  return (
    <div className="space-y-3 bg-white p-6 rounded-lg border-2 border-[#5c6ac4]/20">
      <p className="text-[#212b36] font-medium">
        Enter your WalletConnect connection URL:
      </p>
      <input
        type="text"
        placeholder="wc:a281567bb3e4..."
        {...register("address")}
        value={""}
        //   onChange={(e) => setConnectionUrl(e.target.value)}
        className="w-full border border-[#5c6ac4]/30 focus:border-[#008060] focus:ring-2 focus:ring-[#008060]/20 h-12 px-3 rounded-md outline-none transition-all"
      />
    </div>
  );
};

export default ManualConnectionTab;
