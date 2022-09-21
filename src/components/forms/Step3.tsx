import React from "react";
import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  SimpleGrid,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { FinancialPicture } from "../../types/types";

type Props = {
  info: FinancialPicture | undefined;
  setInfo: React.Dispatch<React.SetStateAction<FinancialPicture | undefined>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormInput = {
  inventories: number;
  receivables: number;
  cashnow: number;
  otherliquid: number;
  payable: number;
  overdraft: number;
  intpayable: number;
  otherpayable: number;
};

const Step3 = ({ info, setInfo, setStep }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormInput>();

  function onSubmit(values: FormInput) {
    if (info) setInfo({ ...info, ...values });
    setStep(3);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacingX="2rem" spacingY="1rem">
        <FormControl isInvalid={!!errors.inventories}>
          <FormLabel htmlFor="inventories">Inventories</FormLabel>
          <Input
            bg="white"
            id="inventories"
            type="number"
            {...register("inventories", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.inventories && errors.inventories.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.receivables}>
          <FormLabel htmlFor="receivables">Accounts Receivable</FormLabel>
          <Input
            bg="white"
            id="receivables"
            type="number"
            {...register("receivables", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.receivables && errors.receivables.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.cashnow}>
          <FormLabel htmlFor="cashnow">Current Cash</FormLabel>
          <Input
            bg="white"
            id="cashnow"
            type="number"
            {...register("cashnow", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.cashnow && errors.cashnow.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.otherliquid}>
          <FormLabel htmlFor="otherliquid">Other Liquid Assets</FormLabel>
          <Input
            bg="white"
            id="otherliquid"
            type="number"
            {...register("otherliquid", {
              required: "This is required. Enter '0' if not applicable.",
            })}
          />
          <FormErrorMessage>
            {errors.otherliquid && errors.otherliquid.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.payable}>
          <FormLabel htmlFor="payable">Accounts Payable</FormLabel>
          <Input
            bg="white"
            id="payable"
            type="number"
            {...register("payable", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.payable && errors.payable.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.overdraft}>
          <FormLabel htmlFor="overdraft">Bank Overdraft</FormLabel>
          <Input
            bg="white"
            id="overdraft"
            type="number"
            {...register("overdraft", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.overdraft && errors.overdraft.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.intpayable}>
          <FormLabel htmlFor="intpayable">Interest Payable</FormLabel>
          <Input
            bg="white"
            id="intpayable"
            type="number"
            {...register("intpayable", {
              required: "This is required.",
            })}
          />
          <FormErrorMessage>
            {errors.intpayable && errors.intpayable.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.otherpayable}>
          <FormLabel htmlFor="otherpayable">
            Other payable (w/ & w/o interest) with maturity under 12 months
          </FormLabel>
          <Input
            bg="white"
            id="otherpayable"
            type="number"
            {...register("otherpayable", {
              required: "This is required.",
            })}
          />
          <FormErrorMessage>
            {errors.otherpayable && errors.otherpayable.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <HStack w="100%" my={3}>
        <Spacer />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          To step 4
        </Button>
      </HStack>
    </form>
  );
};

export default Step3;
