import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [accountType, setAccountType] = useState("standard");
  const [quantity, setQuantity] = useState(1);

  // Цены за единицу
  const prices = {
    standard: 5000,
    custom: 10000,
  };

  // Расчет итоговой стоимости
  const totalPrice = prices[accountType as keyof typeof prices] * quantity;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: "#9FE870" }}
    >
      <Card className="w-full max-w-md border-0 shadow-lg rounded-xl">
        <CardHeader className="pb-2 text-center">
          <CardTitle
            className="text-2xl font-bold"
            style={{ color: "#163300" }}
          >
            WISE Аккаунты
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            {/* Выбор типа аккаунта */}
            <div className="space-y-2">
              <h3 className="font-medium" style={{ color: "#163300" }}>
                Тип аккаунта
              </h3>
              <RadioGroup
                defaultValue="standard"
                value={accountType}
                onValueChange={setAccountType}
                className="flex flex-col space-y-3"
              >
                <div
                  className="flex items-center space-x-3 p-3 border rounded-md hover:border-opacity-70 cursor-pointer transition-all"
                  style={{
                    borderColor: accountType === "standard" ? "#163300" : "",
                  }}
                >
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="font-medium" style={{ color: "#163300" }}>
                      Обычный
                    </div>
                    <div className="text-sm text-gray-500">
                      Стандартный верифицированный аккаунт
                    </div>
                  </Label>
                  <div className="font-medium" style={{ color: "#163300" }}>
                    5 000 ₽
                  </div>
                </div>

                <div
                  className="flex items-center space-x-3 p-3 border rounded-md hover:border-opacity-70 cursor-pointer transition-all"
                  style={{
                    borderColor: accountType === "custom" ? "#163300" : "",
                  }}
                >
                  <RadioGroupItem value="custom" id="custom" />
                  <Label htmlFor="custom" className="flex-1 cursor-pointer">
                    <div className="font-medium" style={{ color: "#163300" }}>
                      Кастомный
                    </div>
                    <div className="text-sm text-gray-500">
                      Настроенный аккаунт с расширенными возможностями
                    </div>
                  </Label>
                  <div className="font-medium" style={{ color: "#163300" }}>
                    10 000 ₽
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Выбор количества */}
            <div className="space-y-2">
              <h3 className="font-medium" style={{ color: "#163300" }}>
                Количество
              </h3>
              <div className="flex items-center rounded-md border border-gray-200 overflow-hidden">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  style={{ color: "#163300" }}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  <Icon name="Minus" className="h-4 w-4" />
                </Button>

                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="h-8 border-0 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  style={{ color: "#163300" }}
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Icon name="Plus" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Итоговая стоимость */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium" style={{ color: "#163300" }}>
                  Итого:
                </span>
                <span
                  className="text-xl font-bold"
                  style={{ color: "#163300" }}
                >
                  {totalPrice.toLocaleString()} ₽
                </span>
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            className="w-full text-white hover:opacity-90 transition-opacity rounded-md"
            style={{ backgroundColor: "#163300" }}
          >
            <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
            Купить аккаунты
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
