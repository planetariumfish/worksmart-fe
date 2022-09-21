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
  Box,
  Heading,
} from "@chakra-ui/react";
import { FinancialPicture } from "../../types/types";

type Props = {
  info: FinancialPicture | undefined;
  setInfo: React.Dispatch<React.SetStateAction<FinancialPicture | undefined>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormInput = {
  fixedassets: number;
  debt: number;
  equity: number;
  employees: number;
  daystopayment: number;
};

const Step2 = ({ info, setInfo, setStep }: Props) => {
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
        <FormControl isInvalid={!!errors.fixedassets}>
          <FormLabel htmlFor="fixedassets">Total Fixed Assets</FormLabel>
          <Input
            bg="white"
            id="fixedassets"
            type="number"
            {...register("fixedassets", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.fixedassets && errors.fixedassets.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.debt}>
          <FormLabel htmlFor="debt">
            Total Debt (with maturity {">"} 12 months)
          </FormLabel>
          <Input
            bg="white"
            id="debt"
            type="number"
            {...register("debt", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.debt && errors.debt.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.equity}>
          <FormLabel htmlFor="equity">Total Equity</FormLabel>
          <Input
            bg="white"
            id="equity"
            type="number"
            {...register("equity", {
              required: "This is required",
            })}
          />
          <FormErrorMessage>
            {errors.equity && errors.equity.message}
          </FormErrorMessage>
        </FormControl>
      </SimpleGrid>
      <Box my="2rem">
        <Heading size="sm" mb="0.7rem">
          And also:
        </Heading>
        <HStack>
          <FormControl isInvalid={!!errors.employees}>
            <FormLabel htmlFor="employees">Total number of employees</FormLabel>
            <Input
              bg="white"
              id="employees"
              type="number"
              {...register("employees", {
                required: "This is required",
              })}
            />
            <FormErrorMessage>
              {errors.employees && errors.employees.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.daystopayment}>
            <FormLabel htmlFor="daystopayment">
              How many days until invoices are payable?
            </FormLabel>
            <Input
              bg="white"
              id="daystopayment"
              type="number"
              {...register("daystopayment", {
                required: "This is required",
              })}
            />
            <FormErrorMessage>
              {errors.daystopayment && errors.daystopayment.message}
            </FormErrorMessage>
          </FormControl>
        </HStack>
      </Box>
      <HStack w="100%" my={3}>
        <Spacer />
        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          To step 3
        </Button>
      </HStack>
    </form>
  );
};

export default Step2;
