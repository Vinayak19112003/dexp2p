import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Stepper from '@/components/ui/Stepper'
import { PAYMENT_METHODS, TIME_LIMITS } from '@/utils/constants'
import toast from 'react-hot-toast'

export default function CreateOffer() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    offerType: 'sell' as 'buy' | 'sell',
    usdtAmount: '',
    pricePerUsdt: '',
    minLimit: '',
    maxLimit: '',
    paymentMethods: [] as string[],
    timeLimit: '30',
    terms: '',
  })

  const steps = [
    { label: 'Offer Details', status: currentStep > 0 ? 'completed' : currentStep === 0 ? 'active' : 'pending' },
    { label: 'Payment Methods', status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'active' : 'pending' },
    { label: 'Terms & Review', status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'active' : 'pending' },
  ] as const

  const handleNext = () => {
    // Add validation here
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Submit to smart contract
    toast.success('Offer created successfully!')
    navigate('/dashboard')
  }

  const togglePaymentMethod = (method: string) => {
    setFormData(prev => ({
      ...prev,
      paymentMethods: prev.paymentMethods.includes(method)
        ? prev.paymentMethods.filter(m => m !== method)
        : [...prev.paymentMethods, method]
    }))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Create New Offer</h1>
        <p className="text-neutral-600">Post your buy or sell offer for USDT</p>
      </div>

      {/* Stepper */}
      <Stepper steps={steps} className="mb-8" />

      <Card>
        {/* Step 1: Offer Details */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Offer Type *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFormData({ ...formData, offerType: 'sell' })}
                  className={`p-6 border-2 rounded-lg transition-all ${
                    formData.offerType === 'sell'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-3xl mb-2">💵</div>
                  <h3 className="font-semibold mb-1">Sell USDT</h3>
                  <p className="text-sm text-neutral-600">I want to sell USDT for INR</p>
                </button>
                <button
                  onClick={() => setFormData({ ...formData, offerType: 'buy' })}
                  className={`p-6 border-2 rounded-lg transition-all ${
                    formData.offerType === 'buy'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className="font-semibold mb-1">Buy USDT</h3>
                  <p className="text-sm text-neutral-600">I want to buy USDT with INR</p>
                </button>
              </div>
            </div>

            <Input
              label="USDT Amount"
              type="number"
              placeholder="Enter amount"
              value={formData.usdtAmount}
              onChange={(e) => setFormData({ ...formData, usdtAmount: e.target.value })}
              helper="Minimum 10 USDT"
              required
            />

            <Input
              label="Price per USDT (INR)"
              type="number"
              placeholder="Enter price"
              value={formData.pricePerUsdt}
              onChange={(e) => setFormData({ ...formData, pricePerUsdt: e.target.value })}
              helper="Current market: ₹83.20"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Minimum Limit (INR)"
                type="number"
                placeholder="Min"
                value={formData.minLimit}
                onChange={(e) => setFormData({ ...formData, minLimit: e.target.value })}
                required
              />
              <Input
                label="Maximum Limit (INR)"
                type="number"
                placeholder="Max"
                value={formData.maxLimit}
                onChange={(e) => setFormData({ ...formData, maxLimit: e.target.value })}
                required
              />
            </div>
          </div>
        )}

        {/* Step 2: Payment Methods */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-3">
                Payment Methods * (Select at least one)
              </label>
              <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.value}
                    onClick={() => togglePaymentMethod(method.value)}
                    className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                      formData.paymentMethods.includes(method.value)
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <h4 className="font-semibold">{method.label}</h4>
                        {formData.paymentMethods.includes(method.value) && (
                          <p className="text-sm text-neutral-600 mt-1">
                            Add your {method.label} details after creating offer
                          </p>
                        )}
                      </div>
                      {formData.paymentMethods.includes(method.value) && (
                        <span className="ml-auto text-success-700">✓</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Payment Time Limit *
              </label>
              <select
                value={formData.timeLimit}
                onChange={(e) => setFormData({ ...formData, timeLimit: e.target.value })}
                className="w-full h-12 px-4 border border-neutral-300 rounded-md"
              >
                {TIME_LIMITS.map((limit) => (
                  <option key={limit.value} value={limit.value}>
                    {limit.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-neutral-500 mt-1">
                Buyers must complete payment within this time
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Terms & Review */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Terms & Conditions (Optional)
              </label>
              <textarea
                value={formData.terms}
                onChange={(e) => setFormData({ ...formData, terms: e.target.value })}
                className="w-full h-32 px-4 py-3 border border-neutral-300 rounded-md"
                placeholder="Add any specific instructions for traders..."
              />
            </div>

            {/* Review Summary */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-lg mb-4">Review Your Offer</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Type:</span>
                  <span className="font-semibold capitalize">{formData.offerType} USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Amount:</span>
                  <span className="font-semibold">{formData.usdtAmount} USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Price:</span>
                  <span className="font-semibold">₹{formData.pricePerUsdt} per USDT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Total Value:</span>
                  <span className="font-semibold">
                    ₹{(parseFloat(formData.usdtAmount || '0') * parseFloat(formData.pricePerUsdt || '0')).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Limits:</span>
                  <span className="font-semibold">₹{formData.minLimit} - ₹{formData.maxLimit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Payment Methods:</span>
                  <span className="font-semibold">{formData.paymentMethods.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Time Limit:</span>
                  <span className="font-semibold">
                    {TIME_LIMITS.find(t => t.value === parseInt(formData.timeLimit))?.label}
                  </span>
                </div>
              </div>
            </div>

            {formData.offerType === 'sell' && (
              <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">🔒 Escrow Required</h4>
                <p className="text-sm text-primary-700">
                  Your {formData.usdtAmount} USDT will be locked in our smart contract escrow until the trade completes. This protects both you and the buyer.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            ← Back
          </Button>
          <Button
            variant="primary"
            onClick={handleNext}
          >
            {currentStep === 2 ? 'Create Offer' : 'Next: ' + steps[currentStep + 1]?.label} →
          </Button>
        </div>
      </Card>
    </div>
  )
}
